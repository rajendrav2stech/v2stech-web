import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import PopUP from '../CommonComponents/PopUp'
import ClientReadMoreData from './ClientReadMoreData'
import ClientShowPdf from './ClientShowPdf'

function ClientDescriptionCard({ videoSrc, title, place, subTitle, summary, readMoreData, imageSrc, pdfSrc }) {
    const [showreadMoreData, setShowReadMoreData] = useState(false)
    const [showPDF, setshowPDF] = useState(false)

    return (
        <Card>
            <Row>
                <Col>
                    <Card.Body className={`d-flex-column ${videoSrc && 'justify-content-center text-center'}`}>
                        {videoSrc &&
                            <Card.Title>
                                <iframe
                                    title={title}
                                    width="560"
                                    height="315"
                                    src={videoSrc}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Card.Title>}
                        <div className="content">
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>{subTitle} {place}</Card.Subtitle>
                        </div>
                        {summary &&
                            <Card.Text>{summary}
                                {
                                    readMoreData &&
                                    <b>
                                        <span style={{ cursor: 'pointer', paddingLeft: 5 }} onClick={() => setShowReadMoreData(true)}>
                                            Read more
                                        </span>
                                    </b>
                                }
                            </Card.Text>}

                    </Card.Body>
                </Col>

                {imageSrc &&

                    <Col lg={2} md={2}>
                        <Card.Body>
                            <Card.Img onClick={() => { setshowPDF(true) }} src={imageSrc} width={'auto'} height={'auto'} />
                            <Button onClick={() => { setshowPDF(true) }}>View PDF</Button>
                        </Card.Body>
                    </Col>

                }

            </Row>
            {showreadMoreData &&
                <PopUP
                    shouldModalOpen={showreadMoreData}
                    closeModal={() => setShowReadMoreData(false)}
                    title={title}
                >
                    <ClientReadMoreData data={readMoreData} />
                </PopUP>
            }
            {showPDF &&
                <PopUP
                    modelSize='lg'
                    shouldModalOpen={showPDF}
                    closeModal={() => setshowPDF(false)}
                    title={title}
                >
                    <ClientShowPdf src={pdfSrc} />
                </PopUP>
            }
        </Card>
    )
}

export default ClientDescriptionCard
