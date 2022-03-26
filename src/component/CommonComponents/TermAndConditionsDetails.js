import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import useApi from '../hooks/useApi'
import ContentBreack from './ContentBreack'
import { termsConditionsApi } from './functions/termsConditionsApi'
import Loader from './Loader'

function TermAndConditionsDetails() {
    // const [termsConditionsInformation] = useApi(termsConditionsApi)

    const [loading, setLoading] = useState(true)
    const [termsConditionsInformation, termsConditionsInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setLoading(false)
                termsConditionsInfo(res)
            }
        }
        termsConditionsApi({}, setResponse)

        return () => isActive = false;

    }, [])

    return (
        <div className="termAndConditions">
            <Container>
                <Row>
                    <Col>
                        {
                            termsConditionsInformation.length > 0 && termsConditionsInformation.map((items, i) => {
                                return (
                                    <div key={i}>
                                        <h3>{items.title}</h3>
                                        <ContentBreack content={items.text} />
                                        {
                                            items.terms_condition ? items.terms_condition.map((it, ii) => {
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
export default TermAndConditionsDetails
