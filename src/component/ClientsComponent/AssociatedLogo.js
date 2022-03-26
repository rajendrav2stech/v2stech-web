import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { associatedLogoApi } from '../CommonComponents/functions/associatedLogoApi'
import GlobalHeadingHardCoded from '../CommonComponents/GlobalHeadingHardCoded'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'

function AssociatedLogo({ pageName }) {
    const [associatedLogo, setAssociatedLogo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setAssociatedLogo(res)
            }
        }
        associatedLogoApi({}, pageName, setResponse)

        return () => isActive = false;

    }, [pageName])

    return (
        <div className="associatedLogo">
            <Container>
                <Row>
                    <Col>
                        <h3></h3>
                        <GlobalHeadingHardCoded strong={`Proud To Be `} span={`Associated With`} />
                        <ul>
                            {
                                associatedLogo.length > 0 && associatedLogo.map((items, i) => {
                                    return (
                                        <li key={i}>
                                            <a href={items.redirect_url}>
                                                <img src={localDomain + items.image} />
                                                <span>{items.title}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AssociatedLogo