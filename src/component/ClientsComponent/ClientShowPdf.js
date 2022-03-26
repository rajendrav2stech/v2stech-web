import React from 'react'
import ShowPdfIframe from '../CommonComponents/ShowPdfIframe'

function ClientShowPdf({ src }) {
    return (
        <div className="text-center">
            <ShowPdfIframe
                pdfSrc={src}
                pdfWidth={500}
                pdfHeight={550}
            />
        </div>
    )
}

export default ClientShowPdf
