import React, { Fragment } from 'react'
import Breadcrumbs from './Breadcrumbs'
import PrivacyPolicyDetails from './PrivacyPolicyDetails'

function privacypolicy(pageName) {
    return (
        <Fragment>
            <Breadcrumbs pageName={pageName} />
            <PrivacyPolicyDetails />
        </Fragment>
    )
}
export default privacypolicy
