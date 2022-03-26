import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import { portfolioApi } from "./functions/portfolioApi";

function PortfolioFilter({ pageName }) {

    const [loading, setLoading] = useState(true)
    const [portfolioCategoryInformation, setPortfolioCategoryInfo] = useState([])
    const [portfolioSubCategoryInformation, setPortfolioSubCategoryInformation] = useState([])
    const [activeClassID, setActiveClassID] = useState(0)

    const setResponseSubCategory = (res) => {
        if (res) {
            setLoading(false)
            setPortfolioSubCategoryInformation(res)
        }
    }
    const getSubCategoryInfo = (id, showAll = false) => {
        let data = { showcase: showAll }
        // if (id === 0 && showAll) {
        //     data.showcase = true
        //     // setActiveClassID('all')

        // }
        if (id === 0 && !showAll) {
            data.showcase = false
            setActiveClassID('all')
        }
        else {
            setActiveClassID(id)
        }
        portfolioApi(data, pageName, setResponseSubCategory, id)
    }
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                setPortfolioCategoryInfo(res)
                if (res.length > 0) {
                    setLoading(false)
                    getSubCategoryInfo(0, true)
                }
            }
        }
        portfolioApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])

    return (
        <div className="portfolio_section">
            <Container>
                <Row>
                    <Col sx="12" >
                        <div className="heading_h2_center text-center">
                            <h2><strong>View our</strong><span> work</span></h2>
                        </div>
                        <ul className="d-flex align-items-center justify-content-center">
                            <li className={`active_ ${activeClassID === 0 && 'active'}`} onClick={() => { setLoading(true); getSubCategoryInfo(0, true) }}>Showcase</li>
                            {portfolioCategoryInformation.length > 0
                                ? portfolioCategoryInformation.map((category_item, i) => {
                                    return (
                                        <li className={`active_ ${activeClassID === category_item.id && 'active'}`} key={'category' + i} onClick={() => { setLoading(true); getSubCategoryInfo(category_item.id) }}>{category_item.category}</li>
                                    )
                                })
                                : "Loading Portfolio..."}
                            <li className={`active_ ${activeClassID === 'all' && 'active'}`} onClick={() => { setLoading(true); getSubCategoryInfo(0) }}>All</li>

                        </ul>

                        <div className="margin_fil">
                            <div className="filter-container">
                                {loading ? <Spinner animation="border" variant="primary" /> :
                                    portfolioSubCategoryInformation.length > 0
                                        ? portfolioSubCategoryInformation.map((sub_category_item) => {
                                            return (
                                                <ProjectCard sub_category_item={sub_category_item} className={`filter-item SHOWCASE WEBAPP ALL`} />
                                            )
                                        })
                                        : "Loading Projects..."}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default PortfolioFilter