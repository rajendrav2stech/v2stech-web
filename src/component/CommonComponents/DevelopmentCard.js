import React from 'react'
// import { Children } from 'react'
import HeadingComponentsH4 from './HeadingComponentsH4'
// import UlListItem from './UlListItem'

const development = ({ headingH4, children }) => {
    return (
            <div className="content">
                <HeadingComponentsH4 headingH4={headingH4} />
                {children}
            </div>
    )
}
export default development