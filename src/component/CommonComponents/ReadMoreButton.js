import React from 'react'

function ReadMoreButton({ redirectUrl }) {
    return <a className='btn' href={redirectUrl} target='_blank' rel="noreferrer">Read More</a>
}

export default ReadMoreButton
