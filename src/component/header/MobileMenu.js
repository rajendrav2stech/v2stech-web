import React, { useState, Fragment } from 'react'
import { LOGO } from "../../assets/images/Index"
// import { Link } from "react-router-dom"
import { Scrollbars } from 'react-custom-scrollbars';
import { Accordion, AccordionItem } from 'react-light-accordion';
import MobileSubMenuList from './MobileSubMenuList';
// import MenuHeading from './MenuHeading';
// import { headerFooterApi } from '../CommonComponents/functions/headerFooterApi';
// import { HeaderFooterContext } from '../../router/AppRouter';

function MobileMenu() {
    // const headerFooterData = useContext(HeaderFooterContext)

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
    // const { atomic, type } = true;

    return (
        <Fragment>
            <div className="menu_btn15" onClick={handleClick}>
                {click ? (
                    <div className="menu btn15 open "><div className="icon" /></div>
                ) : (
                    <div className="menu btn15"><div className="icon" /></div>
                )}
            </div>
            <div className={click ? "mobile__menu is-expanded" : "mobile__menu "}>
                <Scrollbars>
                    <div className="inner_mobile">
                        <div className="mobile__logo">
                            <a href="/">
                                <img src={LOGO} alt="logo" />
                            </a>
                        </div>
                        <Accordion atomic={toString(true)}>
                            {/* {
                                headerFooterInformation.length > 0 && headerFooterInformation.map((mobile, mob) => {
                                    return (
                                        <>
                                        </>
                                    )
                                })
                            } */}
                            <ul>
                                <li>
                                    <MobileSubMenuList url={`/`} content={`Home`} />
                                </li>
                            </ul>
                            <AccordionItem title="About V2stech">
                                <ul>
                                    <MobileSubMenuList url={`/about-us`} content={`Overview`} />
                                    <MobileSubMenuList url={`/clients`} content={`Our Clients`} />
                                    <MobileSubMenuList url={`/news`} content={`News`} />
                                </ul>
                            </AccordionItem>
                            <AccordionItem title="Industry Experience">
                                <ul>
                                    <MobileSubMenuList url={`/education`} content={`Education`} />
                                    <MobileSubMenuList url={`/egovernance`} content={`E-Governance`} />
                                    <MobileSubMenuList url={`/ecommerce`} content={`E-Commerce`} />
                                    <MobileSubMenuList url={`/field-force-management`} content={`Field Force Management`} />
                                    <MobileSubMenuList url={`/health-care`} content={`Health Care`} />
                                    <MobileSubMenuList url={`/analytical-instruments`} content={`Analytical Instruments`} />
                                    <MobileSubMenuList url={`/waste-management`} content={`Waste Management`} />
                                    <MobileSubMenuList url={`/payment-gateway`} content={`Payment Gateway Solutions`} />
                                </ul>
                            </AccordionItem>
                            <AccordionItem title="Services">
                                <ul>
                                    <MobileSubMenuList url={`/product-development`} content={`Product Development`} />
                                    <MobileSubMenuList url={`/integration-solution-services`} content={`Integration Solution Services`} />
                                    <MobileSubMenuList url={`/software-development`} content={`Software Development`} />
                                    <MobileSubMenuList url={`/chatbot-development`} content={`Chatbot Development`} />
                                    <MobileSubMenuList url={`/mobile-development`} content={`Mobile Development`} />
                                    <MobileSubMenuList url={`/ui-ux-services`} content={`UI/UX Services`} />
                                    <MobileSubMenuList url={`/hire-java-developer`} content={`Hire Java Developer`} />
                                    <MobileSubMenuList url={`/hire-integration-developer`} content={`Hire Integration Developer`} />
                                    <MobileSubMenuList url={`/hire-python-developer`} content={`Hire Python Developer`} />
                                    <MobileSubMenuList url={`/hire-mern-developer`} content={`Hire MERN Developer`} />
                                    <MobileSubMenuList url={`/hire-react-developer`} content={`Hire React Developer`} />
                                    <MobileSubMenuList url={`/hire-chatbot-developer`} content={`Hire Chatbot Developer`} />
                                </ul>
                            </AccordionItem>
                            <AccordionItem title="Technology">
                                <ul>
                                    <MobileSubMenuList url={`/python`} content={`Python`} />
                                    <MobileSubMenuList url={`/django`} content={`Django`} />
                                    <MobileSubMenuList url={`/integration-solution`} content={`Integration Solution`} />
                                    <MobileSubMenuList url={`/java`} content={`Java`} />
                                    <MobileSubMenuList url={`/node-js`} content={`NodeJS`} />
                                    <MobileSubMenuList url={`/ionic`} content={`Ionic`} />
                                    <MobileSubMenuList url={`/angular-clojure`} content={`Angular / Clojure`} />
                                    <MobileSubMenuList url={`/react`} content={`React`} />
                                    <MobileSubMenuList url={`/react-native`} content={`React Native`} />
                                    <MobileSubMenuList url={`/mern-stack`} content={`MERN Stack`} />
                                    <MobileSubMenuList url={`/magento`} content={`Magento`} />
                                    <MobileSubMenuList url={`/android-ios-mobile-app`} content={`Android / iOS`} />
                                </ul>
                            </AccordionItem>
                            <ul>
                                <li>
                                    <MobileSubMenuList url={`/portfolio`} content={`Portfolio`} />
                                </li>
                                <li>
                                    <MobileSubMenuList url={`/innovation`} content={`Innovations`} />
                                </li>
                                <li>
                                    <MobileSubMenuList url={`/career`} content={`Careers`} />
                                </li>
                                <li>
                                    <MobileSubMenuList url={`https://v2stech.com/blogs/`} content={`Blog`} />
                                </li>
                            </ul>
                        </Accordion>
                    </div>
                </Scrollbars>
            </div>
        </Fragment>
    )
}
export default MobileMenu