import React from 'react'

function ShowPdfIframe(props) {
    const { pdfSrc, pdfWidth, pdfHeight } = props
    return (
        <iframe
            title={pdfSrc}
            src={pdfSrc}
            width={pdfWidth}
            height={pdfHeight}
        />

    )
}

export default ShowPdfIframe
