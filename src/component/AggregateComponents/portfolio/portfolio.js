import React, { Fragment } from 'react'
import MetaTag from '../../CommonComponents/MetaTag'
import PortfolioFilter from '../../CommonComponents/PortfolioFilter'



export const portfolio = (pageName) => {
    return (
        <Fragment>
            <MetaTag pageName={pageName} />
            <PortfolioFilter pageName={pageName} />
        </Fragment>
    )
}
