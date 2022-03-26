import React from 'react'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsFunctionalFeaturesDesktop from '../CommonComponents/ProjectDetailsFunctionalFeaturesDesktop'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import {
    PCMC5_BDCMB, PCMC5_BANNER, PCMC5_BRIEF, PCMC5_STATISTICK,
    PCMC5_SERVICES_OFFER, PCMC5_BUILD_PERFOMANCE, PCMC5_CUSTOMER_CHALLENGE,
    PCMC5_TECH_FEATURES, PCMC5_TECHNOLOGY_STACK, PCMC5_TC,
    PCMC5_CASE_STUDY
} from '../../actions/types'
const Pcmc5 = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={PCMC5_BDCMB} />
            <ProjectDetailsBanner bannerId={PCMC5_BANNER} />
            <ProjectDetailsBrief briefId={PCMC5_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={PCMC5_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={PCMC5_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={PCMC5_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={PCMC5_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesDesktop functionalFeaturesDesktopId="PCMC5-DESKTOP-FEATURES" />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={PCMC5_TECH_FEATURES} />
            <TechnologyStack stackID={PCMC5_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={PCMC5_TC} />
            <CaseStudy saseStudyId={PCMC5_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default Pcmc5