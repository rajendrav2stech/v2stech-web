import React from 'react'
function DateFild({ dateField }) {
    let date = new Date(dateField);
    let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    return (
        <p style={{display: 'inline'}}>{dateMDY}</p>
    )
}

export default DateFild
