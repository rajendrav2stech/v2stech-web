import React, { useState } from 'react'
import { getPathName } from '../UtilityComponents/getPathName'
import { submitContactUsFormApi } from './functions/submitContactUsFormApi'

export default function GetQuote({ formType, closeModal }) {
    const [formData, setFormData] = useState({
        form_type: formType,
        name: "",
        email_id: "",
        page_url: getPathName()
    })

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handelOnSubmit = event => {
        event.preventDefault();
        // this.setState({ email_id: event.target.value })

        submitContactUsFormApi(formData, (res) => {
            if (res['success']) {
                //reset form
                closeModal()
                alert(res['success'])
            }
            else if (res.status === 500) {
                alert(res.data.error)
            }
        })
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handelOnSubmit}>
                    <div className="form-group">
                        <input placeholder="Name" type="name" onChange={handleOnChange} name="name" value={formData.name} required />
                    </div>
                    <div className="form-group">
                        <input placeholder="Email ID" type="email" onChange={handleOnChange} name="email_id" value={formData.email_id} required />
                    </div>
                    <div className="form-group btn-default">
                        <button type="summit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}