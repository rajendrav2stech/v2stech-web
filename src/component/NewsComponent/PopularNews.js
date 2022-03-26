import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PopularNewBottonCard from './PopularNewBottonCard'
import PopularNewsHeadText from './NewsHeadText'
import PopularNewsTopCard from './PopularNewsTopCard'
import { newsData } from '../../data/newsData'
import { NEWS_URL_PREFIX } from '../../actions/types'

function PopularNews() {


    return (
        <Container>
            <Row>
                <PopularNewsHeadText headTxt={"Popular News"} />
            </Row>
            <Row>
                <PopularNewsTopCard
                    image={'Rajendra'} 
                    title={'Rajendra a1'}
                    content={`sgdhfkgk`}
                    url={`dfad`}
                />
            </Row>
            <Row className="details_news">
                <PopularNewBottonCard
                    image={'Rajendra'}
                    title={'Raju'}
                    content={`bkjsfd`}
                    url={`dfad`}
                />
            </Row>
        </Container>
    )
}

export default PopularNews
