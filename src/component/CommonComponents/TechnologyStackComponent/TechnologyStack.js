import React from 'react'
import TechnologyStackTab from './TechnologyStackTab';
import { technologyStackApi } from '../functions/technologyStackApi';
import GlobalHeadingHardCoded from '../GlobalHeadingHardCoded';
import useApi from '../../hooks/useApi';

function TechnologyStack({ pageName }) {
    const [technologyStackCategoryInformation, technologyStackSubCategoryInformation, getSubCategoryInfo, loading, setLoading] = useApi(technologyStackApi, pageName, true, true)

    return (
        <div className='technology__stack'>
            <GlobalHeadingHardCoded strong={`Technology`} span={"stack"} />
            <TechnologyStackTab technologyStackCategoryInformation={technologyStackCategoryInformation} technologyStackSubCategoryInformation={technologyStackSubCategoryInformation} getSubCategoryInfo={getSubCategoryInfo} loading={loading} setLoading={setLoading} />
        </div>
    )
}




export default TechnologyStack