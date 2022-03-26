import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { CTA } from '../../actions/types';
import CtaContent from './CtaContent';
import CtaNewsletterFreeEvaluationContactForm from '../CommonComponents/Forms/CtaNewsletterFreeEvaluationContactForm';
import { ctaApi } from './functions/ctaApi';

export default function Cta({ pageName }) {
    const [ctaInfomation, ctaInfo] = useState([])

    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                ctaInfo(res)
            }
        }
        ctaApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])

    return (
        <div className="cta_section">
            <Container>
                <div className="section_bg">
                    <Row>
                        {
                            ctaInfomation.length > 0 && ctaInfomation.map((sliderContent, i) => {
                                return (
                                    <CtaContent content={sliderContent.text} key={i} />
                                )
                            })
                        }
                        <CtaNewsletterFreeEvaluationContactForm formType={CTA} buttonText={"Get Free Quote"} />
                    </Row>
                </div>
            </Container>
        </div>
    )
}
