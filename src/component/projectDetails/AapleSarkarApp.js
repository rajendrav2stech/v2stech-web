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
    AAPLESARKAR_BDCMB, AAPLESARKAR_BANNER, AAPLESARKAR_BRIEF, AAPLESARKAR_STATISTICK,
    AAPLESARKAR_SERVICES_OFFER, AAPLESARKAR_BUILD_PERFOMANCE, AAPLESARKAR_CUSTOMER_CHALLENGE,
    AAPLESARKAR_MOBILE_FEATURES, AAPLESARKAR_TECH_FEATURES, AAPLESARKAR_TECHNOLOGY_STACK, AAPLESARKAR_TC,
    AAPLESARKAR_CASE_STUDY
} from '../../actions/types'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'

const AapleSarkar = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={AAPLESARKAR_BDCMB} />
            <ProjectDetailsBanner bannerId={AAPLESARKAR_BANNER} />
            <ProjectDetailsBrief briefId={AAPLESARKAR_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={AAPLESARKAR_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={AAPLESARKAR_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={AAPLESARKAR_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={AAPLESARKAR_CUSTOMER_CHALLENGE} />
            <ProjectDetailsFunctionalFeaturesMobile functionalFeaturesMobileId={AAPLESARKAR_MOBILE_FEATURES} />
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={AAPLESARKAR_TECH_FEATURES} />
            <TechnologyStack stackID={AAPLESARKAR_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={AAPLESARKAR_TC} />
            <CaseStudy saseStudyId={AAPLESARKAR_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default AapleSarkar