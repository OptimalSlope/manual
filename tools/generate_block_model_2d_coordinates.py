"""Generate the numbered 2D coordinate comparison in SVG and PNG format."""
from generate_block_model_3d_diagrams import Canvas, headings, INK, MUTED, X, Z, ORIGIN, CENTRE


def main():
    c = Canvas('2D: one grid, two coordinate systems',
               'The same 5 by 3 grid of 20 m blocks. Local origin (0, 0) m; cross-section origin (100, 50) m. Axis ticks give X and Z coordinates in metres.')
    headings(c, '2D: one grid, two coordinate systems',
             'Changing the export coordinate system does not move the grid or its origin, or resize its blocks.')
    for shift, local in [(0, True), (785, False)]:
        c.box(30+shift, 150, 755, 670)
        c.text(60+shift, 174, 'Block Model coordinates (local)' if local else 'Cross-section coordinates', 30, bold=True)
        c.text(60+shift, 220, 'Measured from the block model origin.' if local else 'Measured in the cross-section coordinate system.', 24, MUTED)
        ox, oz = (0, 0) if local else (100, 50)
        left, bottom, step = 155+shift, 600, 90
        c.box(left, bottom-3*step, 5*step, 3*step, '#EEF4F6', radius=0)
        c.box(left, bottom-step, step, step, '#D9E9EF', radius=0)
        for i in range(6):
            px = left+i*step
            c.line([(px,bottom-3*step),(px,bottom)], '#ACCBD9', 1.4)
            c.line([(px,bottom),(px,bottom+7)], X)
            c.text(px,bottom+16,str(ox+i*20),24,X,anchor='middle')
        for i in range(4):
            py = bottom-i*step
            c.line([(left,py),(left+5*step,py)], '#ACCBD9', 1.4)
            c.line([(left-7,py),(left,py)],Z)
            c.text(left-18,py-14,str(oz+i*20),24,Z,anchor='end')
        c.arrow((left,bottom),(left+5*step+40,bottom),X,3)
        c.arrow((left,bottom),(left,bottom-3*step-40),Z,3)
        c.text(left+5*step+50,bottom-16,'X (m)',24,X,True)
        c.text(left-5,bottom-3*step-78,'Z (m)',24,Z,True)
        centre=(left+step/2,bottom-step/2)
        c.line([centre,(left+130,bottom-85),(left+150,bottom-85)],CENTRE,1.5,dashed=True)
        c.text(left+160,bottom-124,'First block centre',24,CENTRE,True)
        c.text(left+160,bottom-89,'(10, 10) m' if local else '(110, 60) m',26,CENTRE,True)
        c.dot(centre,CENTRE)
        c.dot((left,bottom),ORIGIN,9)
        # Short leader connects the coordinate tuple directly to the origin dot.
        c.line([(left-8,bottom+8),(left-32,bottom+53),(left+40,bottom+53)],ORIGIN,1.5)
        c.text(left+48,bottom+43,'(0, 0) m' if local else '(100, 50) m',26,ORIGIN,True)
        c.box(50+shift,708,715,88,'#EDF4F7',radius=12)
        c.text(72+shift,722,'Grid origin: '+('(0, 0) m' if local else '(100, 50) m'),26,ORIGIN,True)
        c.text(72+shift,758,'Extent (m): '+('X 0–100   Z 0–60' if local else 'X 100–200   Z 50–110'),24)
    c.box(30,842,1540,134,'#E8EFF3',radius=14)
    c.text(60,860,'Example: X and Z block sizes are both 20 m. Coordinates are shown as (X, Z).',26,bold=True)
    c.text(60,900,'Add the grid origin in cross-section coordinates to each local block centre:',26)
    c.text(60,939,'(110, 60) m = (100, 50) m + (10, 10) m. Both panels show the same physical grid.',24,MUTED)
    c.save('block-model-coordinate-systems-2d')


if __name__ == '__main__':
    main()
