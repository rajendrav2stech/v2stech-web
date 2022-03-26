import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { CTA } from '../../actions/types';
import CtaContent from './CtaContent';
import CtaNewsletterFreeEvaluationContactForm from '../CommonComponents/Forms/CtaNewsletterFreeEvaluationContactForm';
import { newsLetterApi } from './functions/newsLetterApi';

export default function Newsletter({ pageName }) {
    const [newsLetterInfomation, newsLetterInfo] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                newsLetterInfo(res)
            }
        }
        newsLetterApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])

    return (
        <div className="cta_section">
            <Container>
                <div className="section_bg">
                    <Row>
                        {
                            newsLetterInfomation.length > 0 && newsLetterInfomation.map((newsLetterContent, i) => {
                                return (
                                    <CtaContent content={newsLetterContent.text} key={i} />
                                )
                            })
                        }
                        <CtaNewsletterFreeEvaluationContactForm formType={CTA} buttonText={"Join Now"} />
                    </Row>
                </div>
            </Container>
        </div>
    )
}