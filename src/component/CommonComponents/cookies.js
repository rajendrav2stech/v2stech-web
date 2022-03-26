import React, { Fragment } from 'react'
import Breadcrumbs from './Breadcrumbs'
import CookiesDetails from './CookiesDetails'

function cookies(pageName) {
    return (
        <Fragment>
            <Breadcrumbs pageName={pageName} />
            <CookiesDetails />
        </Fragment>
    )
}
export default cookies
