import React from 'react'

export default function GlobalHeadingHardCoded({ strong, span }) {
    return (
        <div className="heading_h2">
            <h2>
                <strong className='text-capitalize'>{strong} </strong> <span>{span}</span>
            </h2>
        </div>
    )
}
