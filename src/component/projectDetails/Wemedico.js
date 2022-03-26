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
    WEMEDICO_BDCMB, WEMEDICO_BANNER, WEMEDICO_BRIEF, WEMEDICO_STATISTICK,
    WEMEDICO_SERVICES_OFFER, WEMEDICO_BUILD_PERFOMANCE, WEMEDICO_CUSTOMER_CHALLENGE,
    WEMEDICO_MOBILE_FEATURES, WEMEDICO_TECH_FEATURES, WEMEDICO_TECHNOLOGY_STACK, WEMEDICO_TC,
    WEMEDICO_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'

const Wemedico = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={WEMEDICO_BDCMB} />
            <ProjectDetailsBanner bannerId={WEMEDICO_BANNER} />
            <ProjectDetailsBrief briefId={WEMEDICO_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={WEMEDICO_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={WEMEDICO_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={WEMEDICO_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={WEMEDICO_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={WEMEDICO_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={WEMEDICO_TECH_FEATURES} />
            <TechnologyStack stackID={WEMEDICO_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={WEMEDICO_TC} />
            <CaseStudy saseStudyId={WEMEDICO_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Wemedico