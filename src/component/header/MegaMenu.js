import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SubMenuHeading from './SubMenuHeading';
import SubMenuList from './SubMenuList';
import ShortDownIcon from './ShortDownIcon';
import MenuHeading from './MenuHeading';
import { HeaderFooterContext } from '../../router/AppRouter';
import { Link } from 'react-router-dom';
import { localDomain } from '../GlobalDefinations/GlobalConstants/GlobalUrl';

function MegaMenu() {
    const headerFooterData = useContext(HeaderFooterContext)
    const [hideSubMenu, setHideSubMenu] = useState(false)
    function handleClick(e) {
        setHideSubMenu(false)
        // window.location.reload(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <ul>
            {
                headerFooterData.headerFooterInformation.length > 0 && headerFooterData.headerFooterInformation.map((megaMenu, i) => {
                    return (
                        <li key={i} className={megaMenu.sub_menu[0] ? 'droup_down' : null}>
                            <MenuHeading url={megaMenu.url} name={megaMenu.title} setHideSubMenu={setHideSubMenu} />
                            {megaMenu.sub_menu[0] ? <ShortDownIcon /> : null}
                            {
                                megaMenu.sub_menu[0] && hideSubMenu ?
                                    <div className="mega_menu">
                                        <Container>
                                            <Row className={megaMenu.know_more_session === null ? null : 'about__us_'}>
                                                {
                                                    megaMenu.sub_menu && megaMenu.sub_menu.map((submenu, s) => {
                                                        return (
                                                            <React.Fragment key={s}>
                                                                <Col lg={3} md={3} sm={12} xs={12} >
                                                                    <div className="sub_menu">
                                                                        <SubMenuHeading content={submenu.title} />
                                                                        <ul>
                                                                            {
                                                                                submenu.sub_menu_items ? submenu.sub_menu_items.map((summenuList, sl) => {
                                                                                    return <SubMenuList key={sl} url={summenuList.url} content={summenuList.title} setHideSubMenu={setHideSubMenu} />
                                                                                })
                                                                                    : null
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </Col>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                                {
                                                    megaMenu.know_more_session &&
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <div className="sub_menu sub__menu_single">
                                                            <div className="card_blog">
                                                                <img src={localDomain + megaMenu.know_more_session.image} alt='V2STech-Solutions-Interview' />
                                                            </div>
                                                            <div className="content">
                                                                <p>{megaMenu.know_more_session.title}</p>
                                                            </div>
                                                            <div className="text-center">
                                                                <Link onClick={handleClick}  onMouseEnter={() => { setHideSubMenu(true) }} to={megaMenu.know_more_session.know_more_url} className="more"><span>{megaMenu.know_more_session.button_text}</span> </Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                }
                                            </Row>
                                        </Container>
                                    </div>
                                    : null
                            }
                        </li>
                    )
                })
            }

            {/* <li>
                <MenuHeading url={`/`} name={`Home`} />
            </li>
            <li className="droup_down">
                <ShortDownIcon />
                <MenuHeading url={`/`} name={`About V2STech`} />
                <div className="mega_menu">
                    <Container>
                        <Row className="about__us_">
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`About us`} />
                                    <ul>
                                        <SubMenuList url={`/about-us`} content={`Overview`} />
                                        <SubMenuList url={`/clients`} content={`Our Clients`} />
                                        <SubMenuList url={`/news`} content={`News`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Clients`} />
                                    <div className="client">
                                        <p>
                                            It has been a really great experience working with the V2Tech Solutions team! The dev team has integrated well into our team, and has consistently delivered high quality work in our sprints. The team members are very good at communicating ...</p>
                                        <div className="user">
                                            <img src={KARRILEE} alt="KARRILEE" />
                                            <strong>Kerri-Lee Gascoigne</strong>
                                            <span>MITI, Africa</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Link to='/clients' className="more"><span>View All Clients</span> <img src={MORE} alt="right icon" /></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className="sub_menu sub__menu_single">
                                    <div className="card_blog">
                                        <img src="https://v2stech.com/admin/media/news_image/V2STech-Solutions-Interview.png" alt='V2STech-Solutions-Interview' />
                                    </div>
                                    <div className="content">
                                        <p>Featured interview of our CEO Vikas Kale on Goodfirms platform</p>
                                    </div>
                                    <div className="text-center">
                                        <Link to='/v2stech-solutions-ceo-interview' className="more"><span>Know More</span> </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </li>
            <li className="droup_down">
                <ShortDownIcon />
                <MenuHeading url={`/`} name={`Industry Experience`} />
                <div className="mega_menu">
                    <Container>
                        <Row>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Industry experience`} />
                                    <ul>
                                        <SubMenuList url={`/education`} content={`Education`} />
                                        <SubMenuList url={`/egovernance`} content={`E-Governance`} />
                                        <SubMenuList url={`/ecommerce`} content={`E-Commerce`} />
                                        <SubMenuList url={`/field-force-management`} content={`Field Force Management`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Industry experience`} />
                                    <ul>
                                        <SubMenuList url={`/payment-gateway`} content={`Payment Gateway Solutions`} />
                                        <SubMenuList url={`/analytical-instruments`} content={`Analytical Instruments`} />
                                        <SubMenuList url={`/waste-management`} content={`Waste Management`} />
                                        <SubMenuList url={`/health-care`} content={`Health Care`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className="sub_menu sub__menu_single">
                                    <div className="card_blog">
                                        <img src="https://v2stech.com/admin/media/portfolio/qfix-dashboard_NiOcPZY.png" alt='WTCINTRO' />
                                    </div>
                                    <div className="content">
                                        <p>One stop SaaS solution for education institute management</p>
                                    </div>
                                    <div className="text-center">
                                        <Link to='/erp-with-hosted-payment-gateway-solution' className="more"><span>View All Projects</span> </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </li>
            <li className="droup_down">
                <ShortDownIcon />
                <MenuHeading url={`/`} name={`Services`} />
                <div className="mega_menu">
                    <Container>
                        <Row>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Services`} />
                                    <ul>
                                        <SubMenuList url={`/product-development`} content={`Product Development`} />
                                        <SubMenuList url={`/software-development`} content={`Software Development`} />
                                        <SubMenuList url={`/mobile-development`} content={`Mobile Development`} />
                                        <SubMenuList url={`/chatbot-development`} content={`Chatbot Development`} />
                                        <SubMenuList url={`/ui-ux-services`} content={`UI/UX Services`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Services`} />
                                    <ul>
                                        <SubMenuList url={`/hire-python-developer`} content={`Hire Python Developer`} />
                                        <SubMenuList url={`/hire-java-developer`} content={`Hire Java Developer`} />
                                        <SubMenuList url={`/hire-mern-developer`} content={`Hire MERN developer`} />
                                        <SubMenuList url={`/hire-react-developer`} content={`Hire React developer`} />
                                        <SubMenuList url={`/hire-ui-ux-designer`} content={`Hire UI/UX designer`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className="sub_menu sub__menu_single">
                                    <div className="card_blog">
                                        <img src={RDFT} alt='WTCINTRO' />
                                    </div>
                                    <div className="content">
                                        <p>Benefits of hiring remote software developers</p>
                                    </div>
                                    <div className="text-center">
                                        <Link to='https://v2stech.com/blogs/' className="more"><span>View All Blogs</span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </li>
            <li className="droup_down">
                <ShortDownIcon />
                <MenuHeading url={`/`} name={`Technology`} />
                <div className="mega_menu">
                    <Container>
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Back-end technologies`} />
                                    <ul>
                                        <SubMenuList url={`/python`} content={`Python`} />
                                        <SubMenuList url={`/django`} content={`Django`} />
                                        <SubMenuList url={`/java`} content={`Java`} />
                                        <SubMenuList url={`/node-js`} content={`Node.js`} />
                                        <SubMenuList url={`/Ionic`} content={`Ionic`} />
                                        <SubMenuList url={`/magento`} content={`Magento`} />
                                        <SubMenuList url={`/angular-clojure`} content={`Angular / Clojure`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Front-end technologies`} />
                                    <ul>
                                        <SubMenuList url={`/react`} content={`React`} />
                                        <SubMenuList url={`/react-native`} content={`React Native`} />
                                        <SubMenuList url={`/android-ios-mobile-app`} content={`Android / iOS`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Hire a Developer`} />
                                    <ul>
                                        <SubMenuList url={`/hire-python-developer`} content={`Hire Python Developer`} />
                                        <SubMenuList url={`/hire-java-developer`} content={`Hire Java Developer`} />
                                        <SubMenuList url={`/hire-mern-developer`} content={`Hire MERN developer`} />
                                        <SubMenuList url={`/hire-react-developer`} content={`Hire React developer`} />
                                        <SubMenuList url={`/hire-ui-ux-designer`} content={`Hire UI/UX designer`} />
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </li>
            <li className="droup_down">
                <ShortDownIcon />
                <MenuHeading url={`/`} name={`Innovations`} />
                <div className="mega_menu">
                    <Container>
                        <Row>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Innovations in Apps`} />
                                    <ul>
                                        <SubMenuList url={`/innovations-chatbot`} content={`Innovations in Chatbot`} />
                                        <SubMenuList url={`/innovations-ai-machine-learning`} content={`Innovations in AI & Machine Learning`} />
                                        <SubMenuList url={`/innovation-django`} content={`Innovation in Django`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <div className="sub_menu">
                                    <SubMenuHeading content={`Innovation in SaaS`} />
                                    <ul>
                                        <SubMenuList url={`/annovation-automation`} content={`Innovation in Automation`} />
                                        <SubMenuList url={`/innovations-healthcare`} content={`Innovations in Healthcare`} />
                                        <SubMenuList url={`/innovation-blockchain`} content={`Innovation in Blockchain`} />
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className="sub_menu sub__menu_single">
                                    <div className="card_blog">
                                        <img src={INOVARIONFT} alt='WTCINTRO' />
                                    </div>
                                    <div className="content">
                                        <p>Covid19 Symptom Assessment Chatbot</p>
                                    </div>
                                    <div className="text-center">
                                        <Link to='https://v2stech.com/blogs/' className="more"><span>View All case</span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </li>
            <li>
                <MenuHeading url={`/portfolio`} name={`Portfolio`} />
            </li>
            <li>
                <MenuHeading url={`/career`} name={`Careers`} />
            </li>
            <li>
                <MenuHeading url={`/blogs`} name={`Blog`} />
            </li> */}
        </ul>
    )
}

export default MegaMenu