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
import {
    LEARNMARATHI_BDCMB, LEARNMARATHI_BANNER, LEARNMARATHI_BRIEF, LEARNMARATHI_STATISTICK,
    LEARNMARATHI_SERVICES_OFFER, LEARNMARATHI_BUILD_PERFOMANCE, LEARNMARATHI_CUSTOMER_CHALLENGE,
    LEARNMARATHI_MOBILE_FEATURES, LEARNMARATHI_TECH_FEATURES, LEARNMARATHI_TECHNOLOGY_STACK, LEARNMARATHI_TC,
    LEARNMARATHI_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'

const LearnMarathi = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={LEARNMARATHI_BDCMB} />
            <ProjectDetailsBanner bannerId={LEARNMARATHI_BANNER} />
            <ProjectDetailsBrief briefId={LEARNMARATHI_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={LEARNMARATHI_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={LEARNMARATHI_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={LEARNMARATHI_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={LEARNMARATHI_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={LEARNMARATHI_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={LEARNMARATHI_TECH_FEATURES} />
            <TechnologyStack stackID={LEARNMARATHI_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={LEARNMARATHI_TC} />
            <CaseStudy saseStudyId={LEARNMARATHI_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default LearnMarathi