import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { newsApi } from '../CommonComponents/functions/newsApi'
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import NewsHeadText from './NewsHeadText'
import PopularNewBottonCard from './PopularNewBottonCard'
import PopularNewsTopCard from './PopularNewsTopCard'
import TopNew from './TopNew'
function News() {

    const [companyNewsData, setCompanyNews] = useState([])
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setCompanyNews(res)
            }
        }
        newsApi({}, setResponse)
        return () => isActive = false;
    }, [])

    const topNewsData = companyNewsData.length > 0 && companyNewsData.filter((items, i) => {
        return items.show_card === 'T'
    })
    const popularNewsData = companyNewsData.length > 0 && companyNewsData.filter((items, i) => {
        return items.show_card === 'P'
    })
    const otherNewsData = companyNewsData.length > 0 && companyNewsData.filter((items, i) => {
        return items.show_card == 'O'
    })

    return (
        <div className="news_page">
            <div className="news_page">
                <Container>
                    <Row>
                        <NewsHeadText headTxt={"Top News"} />
                    </Row>
                    {
                        topNewsData ? topNewsData.map((topNews, tn) => {
                            return (
                                <TopNew key={'topnews_' + tn} topNews={topNews} />
                            )
                        }) : null
                    }
                </Container>
                <Container>
                    <Row>
                        <NewsHeadText headTxt={"Popular News"} />
                    </Row>
                    <Row>
                        {
                            popularNewsData ? popularNewsData.map((popNews, pn) => {
                                return (
                                    <PopularNewsTopCard
                                        key={pn}
                                        image={localDomain + popNews.image}
                                        title={popNews.title}
                                        content={popNews.summary}
                                        url={popNews.read_more_url}
                                    />
                                )
                            }) : null
                        }

                    </Row>
                    <Row className="details_news">
                        {
                            otherNewsData ? otherNewsData.map((otherNews, on) => {
                                return (
                                    <PopularNewBottonCard
                                        key={on}
                                        image={localDomain + otherNews.image}
                                        title={otherNews.title}
                                        content={otherNews.summary}
                                        url={otherNews.read_more_url}
                                        date_fields={otherNews.date}
                                    />
                                )
                            }) : null
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default News