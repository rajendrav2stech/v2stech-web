import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { newsApi } from '../CommonComponents/functions/newsApi'
import NewLineText from '../CommonComponents/NewLineText'
// import { newsData } from "../../data/newsData"
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl'
import { getPathName } from '../UtilityComponents/getPathName'

function ReadMoreNews() {
    const [newsData, setNewsData] = useState([])
    const pageName = getPathName()
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setNewsData(res)
            }
        }
        let data = { url: `${pageName}` }
        newsApi(data, setResponse)
        return () => isActive = false;
    }, [])
    return (
        <Fragment>
            {newsData.length > 0 ?
                <div className="details_news_content">
                    <Container>
                        <Row>
                            <Col col={12}>
                                <div className="banner_img">
                                    <img src={localDomain + newsData[0].image} alt={newsData[0].title} />
                                </div>
                                <div className="date_content">
                                    {newsData[0].date ? newsData[0].date : ""}
                                </div>
                                <div className="title_">
                                    {newsData[0].title ? newsData[0].title : ""}
                                </div>

                                <div className="summery_line">
                                    <NewLineText text={newsData[0].summary ? newsData[0].summary : ""} />
                                </div>
                                {newsData[0].project_url_btn_txt ? <div className="btn-default"><a href={newsData[0].project_url} target="_blank">{newsData[0].project_url_btn_txt}</a></div> : null}
                                {/* <div>
                                    <Button>{newsData[0].project_url_btn_txt}</Button>
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
                : "no data"
            }
        </Fragment>
    )
}

export default ReadMoreNews
