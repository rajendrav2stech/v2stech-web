import React, { Fragment } from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import { getPathName } from '../UtilityComponents/getPathName'
import ProjectDetailsFunctionalFeaturesDesktop from '../CommonComponents/ProjectDetailsFunctionalFeaturesDesktop'
import MetaTag from '../CommonComponents/MetaTag'

const projectDetailsDesktop = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <ProjectDetailsBanner pageName={pageName} />
            <ProjectDetailsBrief pageName={pageName} />
            <ProjectDetailsStaticStick pageName={pageName} />
            <ProjectDetailsServicesOffer pageName={pageName} />
            {/* <ProjectDetailsBuildPerfomance pageName={pageName} /> */}
            <ProjectDetailsCustomerChallenge pageName={pageName} />
            {/* <ProjectDetailsFunctionalFeaturesMobile pageName={pageName} /> */}
            <ProjectDetailsFunctionalFeaturesDesktop pageName={pageName} />
            <ProjectDetailsTechnicalFeatures pageName={pageName} />
            <TechnologyStack pageName={pageName} />
            <TestimonialContact pageName={pageName} />
            <CaseStudy pageName={pageName} />
            <Newsletter pageName={pageName} />
        </Fragment>
    )
}
export default projectDetailsDesktop