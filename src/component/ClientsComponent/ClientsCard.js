// import { string } from 'prop-types'
import React, { useState, useEffect } from 'react'
import { CardDeck, Col, Container, Row } from 'react-bootstrap'
// import { spectralabTestimonial, spectralabTestimonialPDF } from '../../assets/images/Index'
import { clientsApi } from '../CommonComponents/functions/clientsApi'
import GlobalHeadingHardCoded from '../CommonComponents/GlobalHeadingHardCoded'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import ClientDescriptionCard from './ClientDescriptionCard'

function ClientsCard({ pageName }) {
    const [clientData, setClientData] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setClientData(res)
            }
        }
        clientsApi({}, pageName, setResponse)

        return () => isActive = false;

    }, [pageName])

    return (
        <div className="client_page_ui">
            <Container>
                <Row>
                    <div className="col-12">
                        <div className='text-center'>
                            <GlobalHeadingHardCoded strong={`What our`} span={`Customer Say`} />
                        </div>
                    </div>
                    <div className="col-12">
                        <CardDeck className="video_client">

                            {
                                clientData.filter(videoUrl => videoUrl.video_url ? true : null).map((videoItems, i) => {
                                    return (
                                        <ClientDescriptionCard
                                            key={i}
                                            videoSrc={videoItems.video_url}
                                            title={videoItems.title}
                                            place={videoItems.sub_title + " " + videoItems.clients_country}
                                        />
                                    )
                                })
                            }
                        </CardDeck>
                        <CardDeck className="otherClients">
                            {
                                clientData.filter(pdfUrl => pdfUrl.pdf ? true : null).map((pdfItems, ii) => {
                                    return (
                                        <ClientDescriptionCard
                                            key={ii}
                                            title={pdfItems.title}
                                            place={pdfItems.sub_title + " " + pdfItems.clients_country}
                                            summary={pdfItems.summary}
                                            imageSrc={localDomain + pdfItems.image}
                                            pdfSrc={localDomain + pdfItems.pdf}
                                        />
                                    )
                                })
                            }
                        </CardDeck>

                        <CardDeck className="otherClients">
                            {
                                clientData.filter(pdfUrl => pdfUrl.image === null && pdfUrl.video_url === null).map((itms, iii) => {
                                    return (
                                        <ClientDescriptionCard
                                            key={iii}
                                            title={itms.title}
                                            subTitle={itms.sub_title && itms.sub_title}
                                            place={itms.clients_country && itms.clients_country}
                                            summary={itms.summary}
                                            readMoreData={itms.read_more && itms.read_more}
                                        />
                                    )
                                })
                            }
                        </CardDeck>

                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default ClientsCard