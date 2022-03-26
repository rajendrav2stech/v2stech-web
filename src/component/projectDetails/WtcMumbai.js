import React from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import CaseStudy from '../CommonComponents/CaseStudy'
import Newsletter from '../CommonComponents/Newsletter'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import {
    WTCMUMBAI_BDCMB, WTCMUMBAI_BANNER, WTCMUMBAI_BRIEF, WTCMUMBAI_STATISTICK,
    WTCMUMBAI_SERVICES_OFFER, WTCMUMBAI_BUILD_PERFOMANCE, WTCMUMBAI_CUSTOMER_CHALLENGE,
    WTCMUMBAI_TECH_FEATURES, WTCMUMBAI_TECHNOLOGY_STACK, WTCMUMBAI_TC,
    WTCMUMBAI_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
const WtcMumbai = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={WTCMUMBAI_BDCMB} />
            <ProjectDetailsBanner bannerId={WTCMUMBAI_BANNER} />
            <ProjectDetailsBrief briefId={WTCMUMBAI_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={WTCMUMBAI_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={WTCMUMBAI_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={WTCMUMBAI_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={WTCMUMBAI_CUSTOMER_CHALLENGE} />

            <ProjectDetailsTechnicalFeatures technicalFeaturesId={WTCMUMBAI_TECH_FEATURES} />
            <TechnologyStack stackID={WTCMUMBAI_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={WTCMUMBAI_TC} />
            <CaseStudy saseStudyId={WTCMUMBAI_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default WtcMumbai
