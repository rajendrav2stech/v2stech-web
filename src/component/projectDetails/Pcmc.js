import React from 'react'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
// import ProjectDetailsFunctionalFeaturesDesktop from '../CommonComponents/ProjectDetailsFunctionalFeaturesDesktop'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import {
    PCMC_BDCMB, PCMC_BANNER, PCMC_BRIEF, PCMC_STATISTICK,
    PCMC_SERVICES_OFFER, PCMC_BUILD_PERFOMANCE, PCMC_CUSTOMER_CHALLENGE,
    PCMC_DESKTOP_FEATURES, PCMC_TECH_FEATURES, PCMC_TECHNOLOGY_STACK, PCMC_TC,
    PCMC_CASE_STUDY
} from '../../actions/types'
const Pcmc = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={PCMC_BDCMB} />
            <ProjectDetailsBanner bannerId={PCMC_BANNER} />
            <ProjectDetailsBrief briefId={PCMC_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={PCMC_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={PCMC_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={PCMC_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PCMC_CUSTOMER_CHALLENGE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PCMC_DESKTOP_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={PCMC_TECH_FEATURES} />
            <TechnologyStack stackID={PCMC_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={PCMC_TC} />
            <CaseStudy saseStudyId={PCMC_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Pcmc