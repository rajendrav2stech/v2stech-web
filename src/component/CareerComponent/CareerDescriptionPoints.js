import React from 'react'

function CareerDescriptionPoints({ index, description }) {
    return (
        <span style={{ display: 'block' }}>{index + 1 + ". "}{description}</span>
    )
}

export default CareerDescriptionPoints
