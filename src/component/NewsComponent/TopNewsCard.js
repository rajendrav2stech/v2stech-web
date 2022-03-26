import React from 'react'
import { Col } from 'react-bootstrap'
import NewLineText from '../CommonComponents/NewLineText'
import ReadMoreButton from '../CommonComponents/ReadMoreButton'
// import { useHistory } from 'react-router'

function TopNewsCard({ news }) {
    const { title, contents, url, imgUrl } = news
    let paraStyle = {
        marginBottom: 10,
    }
    let paraColor = {
        color: 'red'
    }
    return (
        <>
            <Col className='d-flex flex-column details_of_news'>
                <div className="news_details_desc"><h2>{title}</h2></div>
                <div>
                    <NewLineText text={contents} paraStyle={paraStyle}/>
                    {/* <NewLineText text={contents} paraStyle={paraColor}/> */}
                </div>
                <div>
                    <ReadMoreButton redirectUrl={"v2stech-solutions-" + url} />
                </div>
            </Col>
            <Col>
                <div><img src={imgUrl} alt='' /></div>
            </Col>
        </>
    )
}

export default TopNewsCard
