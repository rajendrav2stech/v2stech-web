import React, { useState, useEffect, Fragment } from 'react'
import { HIRING_MODEL } from '../../actions/types'
import CommonModalContactForm from './Forms/CommonModalContactForm'
import { hireDeveloperApi } from './functions/hireDeveloperApi'
// import GlobalHeading from './GlobalHeading'
import HeadingComponentsH3 from './HeadingComponentsH3'
import ParagraphComponent from './ParagraphComponent'
import PopUP from './PopUp'

function HireDeveloperCard({ pageName }) {

    const [hireDeveloperInformation, hireDeveloperInfo] = useState([])
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        let isActive = true;
        const setResponse = (res) => {
            if (isActive && res) {
                hireDeveloperInfo(res)
            }
        }
        hireDeveloperApi({}, pageName, setResponse)
        return () => isActive = false;
    }, [pageName])
    return (
        <Fragment>
            <div className="content">
                {
                    hireDeveloperInformation.length > 0 && hireDeveloperInformation.map((hireData, i) => {
                        return (
                            <div key={i}>
                                <HeadingComponentsH3 headingH3={hireData.title} />
                                <ParagraphComponent content={hireData.summary} />
                            </div>
                        )
                    })
                }

                <div className="text-center btn-default">
                    <button onClick={showModal} type="button" className="btn btn-primary">
                        Request Developer CV
                </button>
                </div>
            </div>
            <PopUP
                shouldModalOpen={isOpen}
                closeModal={hideModal}
                title={'Request Developer CV'}>
                <CommonModalContactForm formType={HIRING_MODEL} closeModal={hideModal} />
            </PopUP>
        </Fragment>
    )
}

export default HireDeveloperCard