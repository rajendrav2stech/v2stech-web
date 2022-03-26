import React, { Fragment } from "react";

function CareerDesignationCard({ designationDetails }) {
    return (
        <>
            <span>Designation: </span><span>{"Python Developer. (Django)"}</span><br />
            {designationDetails.map((designationDetail, i) => {
                return (
                    <Fragment key={"designation_" + i}>
                        <span>{designationDetail.key}: </span><span>{designationDetail.detail}</span><br />
                    </Fragment>
                )
            })}

        </>
    )
}

export default CareerDesignationCard
