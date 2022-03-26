import React from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsFunctionalFeaturesMobile from '../CommonComponents/ProjectDetailsFunctionalFeaturesMobile'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
// import {
//     QFIX_BDCMB, QFIX_BANNER, QFIX_BRIEF, QFIX_STATISTICK,
//     QFIX_SERVICES_OFFER, QFIX_BUILD_PERFOMANCE, QFIX_CUSTOMER_CHALLENGE,
//     QFIX_MOBILE_FEATURES, QFIX_TECH_FEATURES, QFIX_TECHNOLOGY_STACK, QFIX_TC,
//     QFIX_CASE_STUDY
// } from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import { getPathName } from '../UtilityComponents/getPathName'

const qfix = () => {
    const pageName = getPathName(true)
    return (
        <>
            <Breadcrumbs pageName={pageName} />
            <ProjectDetailsBanner pageName={pageName} />
            <ProjectDetailsBrief pageName={pageName} />
            <ProjectDetailsStaticStick pageName={pageName} />
            <ProjectDetailsServicesOffer pageName={pageName} />
            <ProjectDetailsBuildPerfomance pageName={pageName} />
            <ProjectDetailsCustomerChallenge pageName={pageName} />
            <ProjectDetailsFunctionalFeaturesMobile pageName={pageName} />
            <ProjectDetailsTechnicalFeatures pageName={pageName} />
            <TechnologyStack pageName={pageName} />
            <TestimonialContact pageName={pageName} />
            <CaseStudy pageName={pageName} />
            <Newsletter pageName={pageName} />
        </>
    )
}
export default qfix