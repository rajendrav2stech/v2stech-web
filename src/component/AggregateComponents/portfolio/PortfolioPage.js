import React from 'react'
import Breadcrumbs from '../../CommonComponents/Breadcrumbs'
import MetaTag from '../../CommonComponents/MetaTag'
import PortfolioFilter from '../../CommonComponents/PortfolioFilter'
import Demo from '../../CommonComponents/Demo'
import TestimonialContact from '../../CommonComponents/TestimonialContact'
import Blog from '../../CommonComponents/Blog'
import Newsletter from '../../CommonComponents/Newsletter'

const PortfolioPage = () => {
    return (
        <>
            <MetaTag metaId="PORTFOLIOPAGE_META" />
            <Breadcrumbs bdcmbId="PORTFOLIOPAGE-BDCMB" />
           
            <PortfolioFilter defaultSelected="SHOWCASE" portfolioId="PORTFOLIOPAGE-PORTFOLIO" />
            <Demo demoId="PORTFOLIOPAGE-DEMO" />
            <TestimonialContact testimonialContactId="PORTFOLIOPAGE-TC" />
            <Blog blogId="PORTFOLIOPAGE-BLOG" />
            <Newsletter />
        </>
    )
}
export default PortfolioPage