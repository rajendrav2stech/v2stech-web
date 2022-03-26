import React from 'react'
import ProjectDetailsBanner from '../CommonComponents/ProjectDetailsBanner'
import ProjectDetailsBrief from '../CommonComponents/ProjectDetailsBrief'
import ProjectDetailsStaticStick from '../CommonComponents/ProjectDetailsStaticStick'
import ProjectDetailsServicesOffer from '../CommonComponents/ProjectDetailsServicesOffer'
import ProjectDetailsBuildPerfomance from '../CommonComponents/ProjectDetailsBuildPerfomance'
import ProjectDetailsCustomerChallenge from '../CommonComponents/ProjectDetailsCustomerChallenge'
import ProjectDetailsTechnicalFeatures from '../CommonComponents/ProjectDetailsTechnicalFeatures'
import TechnologyStack from '../CommonComponents/TechnologyStackComponent/TechnologyStack'
import TestimonialContact from '../CommonComponents/TestimonialContact'
import Newsletter from '../CommonComponents/Newsletter'
import CaseStudy from '../CommonComponents/CaseStudy'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import {
    ISTIO_BDCMB, ISTIO_BANNER, ISTIO_BRIEF, ISTIO_STATISTICK,
    ISTIO_SERVICES_OFFER, ISTIO_BUILD_PERFOMANCE, ISTIO_CUSTOMER_CHALLENGE,
    ISTIO_TECH_FEATURES, ISTIO_TECHNOLOGY_STACK, ISTIO_TC,
    ISTIO_CASE_STUDY
} from '../../actions/types'

const IstioMesh = () => {
    return (
        <>
            <Breadcrumbs bdcmbId={ISTIO_BDCMB} />
            <ProjectDetailsBanner bannerId={ISTIO_BANNER} />
            <ProjectDetailsBrief briefId={ISTIO_BRIEF} />
            <ProjectDetailsStaticStick staticStickId={ISTIO_STATISTICK} />
            <ProjectDetailsServicesOffer servicesOfferId={ISTIO_SERVICES_OFFER} />
            <ProjectDetailsBuildPerfomance buildPerfomanceId={ISTIO_BUILD_PERFOMANCE} />
            <ProjectDetailsCustomerChallenge customerChallengeId={ISTIO_CUSTOMER_CHALLENGE} />
           
            <ProjectDetailsTechnicalFeatures technicalFeaturesId={ISTIO_TECH_FEATURES} />
            <TechnologyStack stackID={ISTIO_TECHNOLOGY_STACK} />
            <TestimonialContact testimonialContactId={ISTIO_TC} />
            <CaseStudy saseStudyId={ISTIO_CASE_STUDY} />
            <Newsletter />
        </>
    )
}
export default IstioMesh