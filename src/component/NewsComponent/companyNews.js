import React, { Fragment } from 'react'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import News from './News'


export const companyNews = (pageName) => {
    return (
        <Fragment>
            <Breadcrumbs pageName={pageName} />
            <News />
        </Fragment>
    )
}
