import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import useApi from '../hooks/useApi'
import ContentBreack from './ContentBreack'
import { cookiesApi } from './functions/cookiesApi'
import Loader from './Loader'

function CookiesDetails() {
    // const [cookiesApiInformation] = useApi(cookiesApi)

    const [loading, setLoading] = useState(true)
    const [cookiesApiInformation, cookiesApiInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setLoading(false)
                cookiesApiInfo(res)
            }
        }
        cookiesApi({}, setResponse)

        return () => isActive = false;

    }, [])
    return (
        <div className="termAndConditions">
            <Container>
                <Row>
                    <Col>
                        {
                            cookiesApiInformation.length > 0 && cookiesApiInformation.map((items, i) => {
                                return (
                                    <div key={i}>
                                        <h3>{items.title}</h3>
                                        <ContentBreack content={items.text} />
                                        {
                                            items.sub_coockie ? items.sub_coockie.map((it, ii) => {
                                                return (
                                                    <div key={ii}>
                                                        <h4>{it.title}</h4>
                                                        <ContentBreack content={it.text} />
                                                    </div>
                                                )
                                            }) : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
            {loading && <Loader />}
        </div>
    )
}
export default CookiesDetails
