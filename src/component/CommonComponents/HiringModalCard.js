import React, { useState, useEffect, Fragment } from 'react'
import CommonModalContactForm from './Forms/CommonModalContactForm';
import PopUP from '../CommonComponents/PopUp'
import { HIRING_MODEL } from '../../actions/types';
// import { EqualHeight, EqualHeightElement } from 'react-equal-height';

const HiringModalCard = ({ Icon, IconName, headingh4, pagragraph, button, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <Fragment>
            <div className="model__content text-center">
                <div><img src={Icon} alt={IconName} />
                    <h4>{headingh4}</h4>
                    <p>{pagragraph}</p>
                    {children}
                    <div className="text-center btn-default">
                        <button type="button" className="btn btn-varian" data-toggle="modal" data-target="#exampleModal1" onClick={showModal}>{button}</button></div>
                </div>

            </div>
            <PopUP
                shouldModalOpen={isOpen}
                closeModal={hideModal}
                title={'Request Hiring Model'}>
                <CommonModalContactForm formType={HIRING_MODEL} closeModal={hideModal} />
            </PopUP>
        </Fragment>
    )
}
export default HiringModalCard