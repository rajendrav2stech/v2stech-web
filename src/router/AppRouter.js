import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { Home } from "../component/AggregateComponents/index/Home";
import { industryExperience } from "../component/AggregateComponents/industryExperience/industryExperience";
import { aboutUs } from "../component/AggregateComponents/about/aboutUs";
import { technology } from "../component/AggregateComponents/technology/technology";
import { headerFooterApi } from "../component/CommonComponents/functions/headerFooterApi";
import useApi from "../component/hooks/useApi";
import clients from "../component/ClientsComponent/Clients";
import { companyNews } from "../component/NewsComponent/companyNews";
import contactUsPage from "../component/CommonComponents/contactUsPage";
import { portfolio } from "../component/AggregateComponents/portfolio/portfolio";
import { services } from "../component/AggregateComponents/services/services";
import { newRoute } from "../component/NewsComponent/newRoute";
import { NEWS_URL_PREFIX } from "../actions/types";
import termAndConditions from "../component/CommonComponents/termAndConditions";
import privacypolicy from "../component/CommonComponents/privacypolicy";
import cookies from "../component/CommonComponents/cookies";
import projectDetailsMobile from "../component/projectDetails/projectDetailsMobile";
import projectDetailsDesktop from "../component/projectDetails/projectDetailsDesktop";
import { careers } from "../component/CareerComponent/careers";
import { innovation } from "../component/AggregateComponents/technology/innovation";
import { individualUiSample } from "../component/AggregateComponents/technology/individualUiSample";
import projectDetailsRotatedMobile from "../component/projectDetails/projectDetailsRotatedMobile";
import { uiServicesNewsletter } from "../component/AggregateComponents/services/uiServicesNewsletter";
import { blogs } from "../component/NewsComponent/blogs";

export const HeaderFooterContext = createContext();
function AppRouter() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [headerFooterInformation] = useApi(headerFooterApi);
  return (
      <Router>
        <HeaderFooterContext.Provider
          value={{ headerFooterInformation: headerFooterInformation }}
        >
          <Header />
          <Switch>
            {/* Technology Route :: SET */}
            <Route
              path={[
                "/python",
                "/django",
                "/java",
                "/mern-stack",
                "/react",
                "/react-native",
                "/node-js",
                "/ionic",
                "/magento",
                "/android-ios-mobile-app",
                "/angular-clojure",
                "/integration-solution",
                "/newsletter-and-email-marketing",
              ]}
              component={technology}
            />
            {/* Technology Route :: END */}
            {/* <Route exact path="/education">
                        {/* <Route path={`/${NEWS_URL_PREFIX}:string`}>
                            <NewRoute match={`/${NEWS_URL_PREFIX}`} />
                        </Route> */}
            <Route
              path={`/${NEWS_URL_PREFIX}:string`}
              component={(props) => newRoute(props.location.pathname)}
            />

            {/* <Route exact path="/education">
                            <Education />
                        </Route>  */}
            <Route
              exact
              path={[
                "/education",
                "/egovernance",
                "/ecommerce",
                "/field-force-management",
                "/health-care",
                "/analytical-instruments",
                "/waste-management",
                "/payment-gateway",
              ]}
              component={industryExperience}
            />
            <Route
              exact
              path={[
                "/product-development",
                "/integration-solution-services",
                "/software-development",
                "/chatbot-development",
                "/mobile-development",
                "/ui-ux-services",
                "/hire-java-developer",
                "/hire-integration-developer",
                "/hire-python-developer",
                "/hire-mern-developer",
                "/hire-react-developer",
                "/hire-chatbot-developer",
                "/case-studies"
              ]}
              component={services}
            />
            <Route
              exact
              path={["/ui-ux-services/newsletter"]}
              component={uiServicesNewsletter}
            />
            <Route
              exact
              path={[
                "/education-institute-management-crm",
                "/virtual-expo-solution-for-world-trade-center-mumbai",
                "/rural-ecommerce-and-payments-application",
                "/operation-management-software",
                "/digital-waste-and-material-waste-management",
                "/smart-solutions-for-care-homes-and-families",
                "/demand-driven-meter-management",
                "/education-institute-management",
                "/online-jewellery-ecommerce-store",
                "/customized-and-flexible-content-management-application",
                "/qfix-mall",
                "/android-application-builder",
                "/securing-applications-that-power-digital-enterprise",
                "/product-information-chatbot-in-dutch-language",
                "/sentiment-analysis-and-noun-extraction-using-nltp",
                "/question-answering-model",
                "/voice-based-chatbot-conference",
                "/web-scraping-from-car-websites",
                "/single-sign-on-using-okta-api",
                "/istio-service-mesh",
                "/insurance-based-blockchain-system",
                "/school-digital-certificate-verification",
                "/resize-image-in-django",
                "/first-kick-project",
                "/buyer-seller-platform-for-world-trade-center-mumbai",
                "/cross-border-commerce-b2b-virtual-buyer-seller-platform-for-world-trade-center-mumbai"
              ]}
              component={projectDetailsDesktop}
            />
            <Route
              exact
              path={[
                "/erp-with-hosted-payment-gateway-solution",
                "/ezeefinanze",
                "/water-distribution-monitoring-system",
                "/realtime-monitoring-device-application",
                "/real-time-meter-analysis",
                "/smart-public-transit-solution",
                "/grievance-redressal-application",
                "/motor-grievance-redressal-and-distress-alert-app",
                "/egovernance-with-smart-edge",
                "/government-services-form-processing-mobile-application",
                "/government-subsidy-form-processing-mobile-application",
                "/doctors-communication-platform-application",
                "/display-product-chatbot",
                "/display-meeting-chabot",
                "/hr-interview-chatbot",
                "/business-referral-organization",
                "/covid19-symptom-assessment-chatbot",
                "/tab-based-random-quiz-application",
                "/field-activity-tracker-application",
              ]}
              component={projectDetailsMobile}
            />
            <Route
              exact
              path={["/smart-assistant-for-self-learning"]}
              component={projectDetailsRotatedMobile}
            />
            <Route exact path="/career" component={careers} />
            <Route exact path="/innovation" component={innovation} />
            <Route
              exact
              path={[
                "/newsletter-design-in-mailchimp",
                "/newsletter-template-design",
                "/newsletter-template-design-food-and-restaurant",
                "/language-learning-app-design",
                "/mobile-app-splash-screen-design",
                "/ux-audit-wireframing-and-prototyping-for-mobile-app",
                "/iconography-case-study",
                "/directory-listing-web-design",
                "/car-care-app-design",
                "/real-estate-landing-page-design-for-online-promotion",
                "/web-app-wireframe-case-study",
                "/mobile-app-wireframe-case-study",
                "/landing-page-design-for-business-promotion",
                "/wireframe-case-study",
                "/school-app-design-case-study",
                "/fintech-dashboard-ui-ux-design-case-study",
                "/shunya-financial-services-web-design-case-study",
                "/fintech-loan-processing-mobile-app-design-case-study",
                "/nmmc-online-citizen-service-delivery-mobile-app-design-case-study",
                "	smart-public-transit-mobile-app-UI-UX-design",
                "/newsletter-for-pharma-b2b-promotion",
                "/psd-to-html-e-commerce-newsletter-design-in-mailchimp",
                "/corporate-newsletter-campaign-in-salesforce-pardot",
                "/newsletter-template-design-in-zoho-campaigns-for-b2b-promotion",
                "/product-promotion-newsletter-template-design-and-html",
                "/cryptocurrency-newsletter-template-design-and-html",
                "/fitness-mobile-app-design-in-dark-theme",
                "/health-mobile-app",
                "/doctor-patient-connect-medical-mobile-app-ui-ux-design",
                "/food-ordering-mobile-app-ui-ux-design",
                "/cryptocurrency-mobile-app-design",
                "/cryptocurrency-mobile-app-ui-ux-design",
                "/cryptocurrency-dashboard-ui-ux-design",
                "/dark-theme-mobile-app-design",
                "/neomorphism-design-style",
                "/neomorphism-style-mobile-app-design",
                "/neomorphism-style-dashboard-design",
                "/glassmorphism-design-style",
                "/glassmorphism-style-mobile-app-design",
                "/glassmorphism-style-dashboard-design",
                "/design-case-study-1",
                "/design-case-study-2",
                "/design-case-study-3",
                "/newsletter-template-design-upwork-showcase-5",
                "/newsletter-template-design-upwork-showcase-6",
                "/newsletter-template-design-upwork-showcase-7",
                "/newsletter-template-design-upwork-showcase-8",
                "/newsletter-template-design-upwork-showcase-9",
                "/newsletter-template-design-upwork-showcase-10",
                "/landing-page-design-for-food-ordering-app",
                "/landing-page-design-showcase-upwork-2",
                "/landing-page-design-showcase-upwork-3",
                "/landing-page-design-showcase-upwork-4",
                "/landing-page-design-showcase-upwork-5",
                "/buyer-seller-platform-for-world-trade-center-mumbai-ui-ux",
                "/saas-mvp-dashboard-frontend-design-using-react"
              ]}
              component={individualUiSample}
            />
            <Route
              exact
              path="/terms-and-conditions"
              component={termAndConditions}
            />
            <Route exact path="/privacy-policy" component={privacypolicy} />
            <Route exact path="/cookies" component={cookies} />
            <Route exact path="/contact-us" component={contactUsPage} />
            <Route
              exact
              path="/portfolio"
              component={() => portfolio("portfolio")}
            />
            <Route
              exact
              path="/news"
              component={() => companyNews("companyNews")}
            />
            <Route exact path="/clients" component={clients} />
            <Route exact path={["/about-us"]} component={aboutUs} />
            <Route
              exact
              path={["/", "/home"]}
              render={(props) => <Home {...props} pageName="home" />}
            />
            <Route exact path="/blogs/" component={blogs} />

            {/* Redirect  */}

            <Redirect to="/" />
          </Switch>
          <Footer />
        </HeaderFooterContext.Provider>
      </Router>
  );
}
export default AppRouter;
