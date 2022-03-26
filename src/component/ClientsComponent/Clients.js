import React, { Fragment } from 'react'
import MetaTag from '../CommonComponents/MetaTag'
import ClientsCard from './ClientsCard'
import { getPathName } from '../UtilityComponents/getPathName'
import Breadcrumbs from '../CommonComponents/Breadcrumbs'
import AssociatedLogo from './AssociatedLogo'
import RattingOnlyViewClinet from '../CommonComponents/RattingOnlyViewClinet'


const clients = () => {
    const pageName = getPathName(true)
    return (
        <Fragment>
            <MetaTag metaId="PYTHON-META" pageName={pageName} />
            <Breadcrumbs pageName={pageName} />
            <ClientsCard pageName={pageName} />
            <AssociatedLogo pageName={pageName} />
            <RattingOnlyViewClinet pageName={pageName} />
        </Fragment>
    )
}

export default clients