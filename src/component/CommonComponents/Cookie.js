import React from 'react'
import CookieConsent from "react-cookie-consent";
import { COOKIE } from '../../assets/images/Index'

export default class Cookie extends React.Component {
    render() {
        return (
            <CookieConsent enableDeclineButton flipButtons>
                <div className="content">
                    <img src={COOKIE} alt="coolie" />
                    <div className="cont">
                        <p>We use cookies on this site to enhance your user experience.</p>
                        <p>For a complete overview of all cookies used, please see your <a href="/" target="_blank"> Read more</a></p>
                    </div>
                </div>
            </CookieConsent>
        )
    }
}