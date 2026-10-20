"""Generate the editable 3D help diagrams and matching app/manual PNGs.

Requires Pillow. Run from any directory; the neighbouring frontend receives
the same PNGs when present. Coordinates are projected from one 20 m grid.
"""
from pathlib import Path
from html import escape
import math
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/docs_images'
APP = ROOT.parent / 'OptimalSlope_Frontend/CAD GUI/WPF_WinForms/res/block-model-help'
INK, MUTED = '#163D50', '#546B78'
X, Y, Z = '#D74632', '#14864C', '#2861D8'
ORIGIN, CENTRE = '#E76122', '#006AB8'
SIZE = 20
COUNTS = (5, 3, 2)
OFFSET = (100, 200, 50)


class Canvas:
    def __init__(self, title, description):
        self.im = Image.new('RGB', (3200, 2000), '#F5F8FA')
        self.d = ImageDraw.Draw(self.im)
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img"><title>{escape(title)}</title><desc>{escape(description)}</desc>',
                    '<rect width="1600" height="1000" fill="#F5F8FA"/>']

    def line(self, points, color=INK, width=2, dashed=False):
        pts = [(float(x), float(y)) for x, y in points]
        if dashed:
            for a, b in zip(pts, pts[1:]):
                length = math.dist(a, b)
                for start in range(0, math.ceil(length), 12):
                    t, u = start / length, min(start + 6, length) / length
                    self.d.line([(2*(a[0]+(b[0]-a[0])*v), 2*(a[1]+(b[1]-a[1])*v)) for v in (t,u)], fill=color, width=round(width*2))
        else:
            self.d.line([(x*2,y*2) for x,y in pts], fill=color, width=round(width*2))
        dash = ' stroke-dasharray="6 6"' if dashed else ''
        self.svg.append(f'<polyline points="{" ".join(f"{x:g},{y:g}" for x,y in pts)}" fill="none" stroke="{color}" stroke-width="{width}"{dash}/>')

    def polygon(self, points, fill, outline=None):
        self.d.polygon([(x*2,y*2) for x,y in points], fill=fill)
        self.svg.append(f'<polygon points="{" ".join(f"{x:g},{y:g}" for x,y in points)}" fill="{fill}"/>')
        if outline:
            self.line(points+[points[0]], outline)

    def box(self, x, y, w, h, fill='#FFFFFF', stroke='#D4E3EA', radius=18):
        self.d.rounded_rectangle((x*2,y*2,(x+w)*2,(y+h)*2), radius=radius*2, fill=fill, outline=stroke, width=2)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}"/>')

    def text(self, x, y, value, size=26, color=INK, bold=False, anchor='start'):
        font = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf', size*2)
        width = self.d.textlength(value, font=font)/2
        left = x - (width/2 if anchor == 'middle' else width if anchor == 'end' else 0)
        assert left >= 0 and left+width <= 1600, (value, left, width)
        self.d.text((left*2,y*2), value, font=font, fill=color, anchor='lt')
        self.svg.append(f'<text x="{x}" y="{y}" dominant-baseline="text-before-edge" text-anchor="{anchor}" font-family="Segoe UI, sans-serif" font-size="{size}" font-weight="{700 if bold else 400}" fill="{color}">{escape(value)}</text>')

    def dot(self, p, color, radius=8):
        x,y=p
        self.d.ellipse(((x-radius)*2,(y-radius)*2,(x+radius)*2,(y+radius)*2),fill=color,outline='white',width=3)
        self.svg.append(f'<circle cx="{x}" cy="{y}" r="{radius}" fill="{color}" stroke="white" stroke-width="1.5"/>')

    def arrow(self, a, b, color=INK, width=2, both=False):
        self.line([a,b],color,width)
        for tip,tail in [(b,a)]+([(a,b)] if both else []):
            dx,dy=tip[0]-tail[0],tip[1]-tail[1]
            n=math.hypot(dx,dy); dx/=n; dy/=n
            self.polygon([tip,(tip[0]-10*dx+4*dy,tip[1]-10*dy-4*dx),(tip[0]-10*dx-4*dy,tip[1]-10*dy+4*dx)],color)

    def save(self, name):
        (OUT/f'{name}.svg').write_text('\n'.join(self.svg+['</svg>'])+'\n', encoding='utf-8')
        path=OUT/f'{name}.png'
        self.im.resize((1600,1000),Image.Resampling.LANCZOS).save(path)
        if APP.is_dir():
            (APP/path.name).write_bytes(path.read_bytes())
        print(path)


def grid(c, origin, counts=COUNTS, unit=70, depth=(35,-28), highlight=True):
    """All faces, axes and centres use the same projection; Z is vertical."""
    ox,oy=origin; nx,ny,nz=counts
    def p(x,y,z): return (ox+unit*x+depth[0]*y,oy+depth[1]*y-unit*z)
    c.polygon([p(0,0,0),p(nx,0,0),p(nx,0,nz),p(0,0,nz)],'#E5F0F5')
    c.polygon([p(nx,0,0),p(nx,ny,0),p(nx,ny,nz),p(nx,0,nz)],'#D7E9F1')
    c.polygon([p(0,0,nz),p(nx,0,nz),p(nx,ny,nz),p(0,ny,nz)],'#ECF5F8')
    # Far edges show the interior, including the depth axis at the origin.
    for a,b in [((0,0,0),(0,ny,0)),((0,ny,0),(nx,ny,0)),((0,ny,0),(0,ny,nz))]:
        c.line([p(*a),p(*b)],'#9CBAC9',1,dashed=True)
    for i in range(nx+1): c.line([p(i,0,0),p(i,0,nz),p(i,ny,nz)],'#ACCBD9',1.4)
    for j in range(ny+1): c.line([p(0,j,nz),p(nx,j,nz),p(nx,j,0)],'#ACCBD9',1.4)
    for k in range(nz+1): c.line([p(0,0,k),p(nx,0,k),p(nx,ny,k)],'#ACCBD9',1.4)
    for a,b in [((0,0,0),(nx,0,0)),((nx,0,0),(nx,ny,0)),((nx,ny,0),(nx,ny,nz)),((nx,ny,nz),(0,ny,nz)),((0,ny,nz),(0,0,nz)),((0,0,nz),(0,0,0)),((0,0,nz),(nx,0,nz)),((nx,0,nz),(nx,ny,nz)),((nx,0,nz),(nx,0,0))]:
        c.line([p(*a),p(*b)],'#4F8DA8',2)
    if highlight:
        for a,b in [((0,0,0),(1,0,0)),((1,0,0),(1,0,1)),((1,0,1),(0,0,1)),((0,0,1),(0,0,0)),((0,0,1),(0,1,1)),((0,1,1),(1,1,1)),((1,1,1),(1,0,1)),((1,1,1),(1,1,0)),((1,1,0),(1,0,0))]:
            c.line([p(*a),p(*b)],CENTRE,2)
    # Colour matches the app: X red, Y green, Z blue.
    for endpoint,label,color,offset in [(p(1.3,0,0),'X',X,(5,-34)),(p(0,ny,0),'Y',Y,(10,-8)),(p(0,0,nz+(.35 if unit > 100 else .7)),'Z',Z,(-9,-34))]:
        c.arrow(origin,endpoint,color,3)
        c.text(endpoint[0]+offset[0],endpoint[1]+offset[1],label,26,color,True)
    centre=p(.5,.5,.5)
    c.dot(origin,ORIGIN,9); c.dot(centre,CENTRE)
    return p,centre


def headings(c,title,subtitle):
    c.text(800,28,title,42,bold=True,anchor='middle')
    c.text(800,91,subtitle,26,color=MUTED,anchor='middle')


def coordinate_diagram():
    c=Canvas('3D block model coordinate systems','The same 5 by 3 by 2 grid of 20 m blocks expressed in local and Ground Model coordinates. Z is vertical. The grid does not move.')
    headings(c,'3D: one block model, two coordinate systems','Changing the export coordinate system does not move the grid or its origin, or resize its blocks.')
    for shift,local in [(0,True),(785,False)]:
        c.box(30+shift,150,755,670)
        c.text(60+shift,174,'Block Model coordinates (local)' if local else 'Ground Model coordinates',30,bold=True)
        c.text(60+shift,220,'Positions measured from the block model origin.' if local else 'Positions in the Ground Model coordinate system.',24,color=MUTED)
        p,centre=grid(c,(140+shift,565))
        c.text(150+shift,577,'(0, 0, 0) m' if local else '(100, 200, 50) m',22,ORIGIN,True)
        c.text(250+shift,275,'First block centre',24,CENTRE,True)
        c.text(250+shift,308,'(10, 10, 10) m' if local else '(110, 210, 60) m',26,CENTRE,True)
        c.line([centre,(225+shift,300),(240+shift,300)],CENTRE,1.5,dashed=True)
        # Dimensions follow the matching X, Y and Z edges.
        c.line([p(0,0,0),(140+shift,615)],'#92A8B3',1,dashed=True)
        c.line([p(5,0,0),(490+shift,615)],'#92A8B3',1,dashed=True)
        c.arrow((140+shift,610),(490+shift,610),both=True)
        c.text(315+shift,626,'X: 5 blocks' if local else 'X: 100 m',24,bold=True,anchor='middle')
        c.arrow((525+shift,590),(630+shift,506),both=True)
        c.text(630+shift,557,'Y: 3 blocks' if local else 'Y: 60 m',22,anchor='middle')
        c.line([p(5,3,0),(650+shift,481)],'#92A8B3',1,dashed=True)
        c.line([p(5,3,2),(650+shift,341)],'#92A8B3',1,dashed=True)
        c.arrow((645+shift,481),(645+shift,341),both=True)
        c.text(662+shift,386,'Z: 2' if local else 'Z: 40',22,bold=True)
        c.text(662+shift,418,'blocks' if local else 'm',22)
        c.box(50+shift,682,715,116,'#EDF4F7',radius=12)
        c.text(72+shift,699,'Grid origin: '+('(0, 0, 0) m' if local else '(100, 200, 50) m'),26,ORIGIN,True)
        c.text(72+shift,738,'Extent (m): '+('X 0–100   Y 0–60   Z 0–40' if local else 'X 100–200   Y 200–260   Z 50–90'),24)
    c.box(30,842,1540,134,'#E8EFF3',radius=14)
    c.text(60,860,'Example: 20 × 20 × 20 m blocks. The blue outline marks the first block.',26,bold=True)
    c.text(60,900,'Add the block model origin in Ground Model coordinates to each local block centre:',26)
    c.text(60,939,'(110, 210, 60) m = (100, 200, 50) m + (10, 10, 10) m. Both panels show the same physical grid.',24,color=MUTED)
    c.save('block-model-coordinate-systems-3d')


def origin_diagram():
    c=Canvas('3D block model origin and block size','The origin is the lowest X, Y and Z corner of the first block, not its centre. Each block is 20 m along X, Y and Z.')
    headings(c,'3D: block model origin and block size','The origin is the corner with the lowest X, Y and Z coordinates of the first block, not its centre.')
    c.box(30,150,665,670); c.box(720,150,850,670)
    c.text(60,176,'One block',30,bold=True)
    c.text(60,222,'20 m along each axis',25,color=MUTED)
    p,centre=grid(c,(180,580),(1,1,1),190,(100,-80),False)
    # Centre guides pass through the interior, not the front face.
    for a,b in [((0,.5,.5),(1,.5,.5)),((.5,0,.5),(.5,1,.5)),((.5,.5,0),(.5,.5,1))]:
        c.line([p(*a),p(*b)],CENTRE,1,dashed=True)
    c.dot(centre,CENTRE)
    c.text(390,276,'Block centre',25,CENTRE,True)
    c.line([centre,(420,313)],CENTRE,1.5,dashed=True)
    c.arrow((180,625),(370,625),both=True)
    c.text(275,641,'X: 20 m',24,bold=True,anchor='middle')
    c.arrow((405,610),(505,530),both=True)
    c.text(500,582,'Y: 20 m',24)
    c.arrow((510,500),(510,310),both=True)
    c.text(530,390,'Z: 20 m',24)
    c.box(50,696,625,100,'#EDF4F7',radius=12)
    c.text(75,712,'Origin: lowest X, Y and Z corner',26,ORIGIN,True)
    c.text(75,751,'Centre: half a block along each axis',24,CENTRE,True)
    c.text(750,176,'The block model',30,bold=True)
    c.text(750,222,'5 × 3 × 2 blocks = 30 blocks',25,color=MUTED)
    p,centre=grid(c,(850,565))
    c.text(970,275,'First block centre',25,CENTRE,True)
    c.text(970,312,'(110, 210, 60) m',26,CENTRE,True)
    c.line([centre,(950,300)],CENTRE,1.5,dashed=True)
    c.text(850,626,'Blue outline: first block',25,CENTRE,True)
    c.box(740,696,810,100,'#EDF4F7',radius=12)
    c.text(765,712,'Block model origin: (100, 200, 50) m',26,ORIGIN,True)
    c.text(765,751,'Coordinates here use the Ground Model system.',24)
    c.box(30,842,1540,134,'#E8EFF3',radius=14)
    c.text(60,860,'The first block centre is 10 m from the origin along X, Y and Z.',28,bold=True)
    c.text(60,905,'Origin (100, 200, 50) m + half a block (10, 10, 10) m = first centre (110, 210, 60) m.',26)
    c.text(60,944,'The origin can have non-zero coordinates. This example is an unrotated, regular 3D grid.',24,color=MUTED)
    c.save('block-model-origin-3d')


if __name__ == '__main__':
    coordinate_diagram()
    origin_diagram()
