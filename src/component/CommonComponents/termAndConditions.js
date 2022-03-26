import React, { Fragment } from 'react'
import Breadcrumbs from './Breadcrumbs'
import MetaTag from './MetaTag'
import TermAndConditionsDetails from './TermAndConditionsDetails'

function termAndConditions(pageName) {
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <TermAndConditionsDetails />
        </Fragment>
    )
}
export default termAndConditions
