import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = ({fnMental}:{fnMental?: (val:any)=> void }) => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id,title,description,className,img, imgClassName, titleClassName, spareImg},i) =>(
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    fnMental={fnMental}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid