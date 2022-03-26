import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import useApi from '../hooks/useApi'
import ContentBreack from './ContentBreack'
import { privacyPolicyApi } from './functions/privacyPolicyApi'
import Loader from './Loader'

function PrivacyPolicyDetails() {
    // const [privacyPolicyInformation] = useApi(privacyPolicyApi)

    const [loading, setLoading] = useState(true)
    const [privacyPolicyInformation, privacyPolicyInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setLoading(false)
                privacyPolicyInfo(res)
            }
        }
        privacyPolicyApi({}, setResponse)

        return () => isActive = false;

    }, [])
    return (
        <div className="termAndConditions">
            <Container>
                <Row>
                    <Col>
                        {
                            privacyPolicyInformation.length > 0 && privacyPolicyInformation.map((items, i) => {
                                return (
                                    <div key={i}>
                                        <h3>{items.title}</h3>
                                        <ContentBreack content={items.text} />
                                        {
                                            items.privacy_policy ? items.privacy_policy.map((it, ii) => {
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
export default PrivacyPolicyDetails
