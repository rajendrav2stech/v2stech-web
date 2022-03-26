import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { PHONECALL, WHATAPPFT, EMAILFT, FOOTER_LOGO } from "../../assets/images/Index"
// import { footerData } from '../../data/footerData'
import { HeaderFooterContext } from '../../router/AppRouter';
// import { headerFooterApi } from '../CommonComponents/functions/headerFooterApi';
import SubHeadingFooter from './SubHeadingFooter';
import SubListFooter from './SubListFooter';

function Footer() {

    const headerFooterData = useContext(HeaderFooterContext)
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <div className="address col-lg-3 col-md-3 col-sm-6 col-12">
                        <Link to="/">
                            <img src={FOOTER_LOGO} alt="logo" /></Link>
                        <p>V2STech Solutions Pvt. Ltd. <br /> 501, 9 Mansi, Cross Lane no.1, Ram Maruti road, near Gaondeviground, Thane (West),
                            Maharashtra - 400602</p>
                        <SubHeadingFooter content={`Business Queries`} />
                        <ul>
                            <li>
                                <a href="tel:0018622481260">
                                    <img src={PHONECALL} alt="Phone call" /><span>001 (862) 248 1260</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:0018622481260">
                                    <img src={WHATAPPFT} alt="Whats app" /><span>001 (862) 248 1260</span></a>
                            </li>
                            <li>
                                <a href="mailto:sales@v2stech.com">
                                    <img src={EMAILFT} alt="Email" /><span>sales@v2stech.com</span>
                                </a>
                            </li>
                        </ul>
                        <SubHeadingFooter content={`HR Department`} />
                        <ul>
                            {/* <li>
                                <a href="tel:+918949858001">
                                    <img src={PHONECALL} alt="Phone call" /><span>+91 8949858001</span>
                                </a>
                            </li> */}
                            <li>
                                    <a href="tel:+919028140336">
                                        <img src={PHONECALL} alt="Phone call" /><span>+91 90281 40336</span>
                                    </a>
                                </li>
                            <li>
                                <a href="mailto:hr@v2stech.com">
                                    <img src={EMAILFT} alt="Email" /><span>hr@v2stech.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {
                        headerFooterData.headerFooterInformation.length ? headerFooterData.headerFooterInformation.map((footerData, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {
                                        footerData.show_in_footer ?
                                            <Col className="mega__menu" lg={3} md={3} sm={6}>
                                                <SubHeadingFooter content={footerData.title} />
                                                <ul>
                                                    {
                                                        footerData.sub_menu ? footerData.sub_menu.map((subMenu, sb) => {
                                                            return (
                                                                <React.Fragment key={sb}>
                                                                    {subMenu.id === 5 ? <h4>{subMenu.title}</h4> : null}
                                                                    {
                                                                        subMenu.sub_menu_items ? subMenu.sub_menu_items.map((menu, mn) => {
                                                                            return (
                                                                                <li key={mn}>
                                                                                    {
                                                                                        menu.show_in_footer ? <SubListFooter href={menu.url} content={menu.title} /> : null
                                                                                    }
                                                                                </li>
                                                                            )
                                                                        }) : null
                                                                    }
                                                                </React.Fragment>
                                                            )
                                                        }) : null

                                                    }
                                                </ul>
                                            </Col> : null
                                    }
                                </React.Fragment>
                            )
                        }) : null
                    }
                </Row>
            </Container>
            <div className="copy_right">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js" defer></script>
                            <div className="godaddy_ssl s1">
                                <span id="siteseal">
                                    <script async="" type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=3fy51Z2XXzsrOrYS37fKQmWKjDizoWiAtO7lHZF5o0AfmrUD1QKkSRJ99Uwi" defer>
                                        <img style={{ cursor: "pointer" }} src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif" alt="SSL site seal - click to verify" />
                                    </script>
                                    <span id="siteseal">
                                    </span>
                                </span>
                                <a href="//www.dmca.com/Protection/Status.aspx?ID=12b7b7c2-2c38-44fd-870d-ce43669e6b8f" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=12b7b7c2-2c38-44fd-870d-ce43669e6b8f" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <p> © 2021 V2STech Solutions Pvt Ltd. All rights reserved.</p>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <ul className="d-flex">
                                <li><a href='/privacy-policy'>Privacy Policy</a></li>
                                <li><a href='/terms-and-conditions'>Terms And Conditions</a></li>
                                <li><a href='/cookies'>Cookie Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
export default Footer;