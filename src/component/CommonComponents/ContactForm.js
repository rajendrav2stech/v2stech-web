import React, { useState } from 'react'
// import PhoneInput from 'react-phone-input-2'
import { submitContactUsFormApi } from './functions/submitContactUsFormApi'

export default function ContactForm({ formType }) {
    const [formData, setFormData] = useState({
        form_type: formType,
        name: "",
        phone: "",
        email_id: "",
        subject: "",
        message: "",
        page_url: window.location.pathname
    })

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handelOnSubmit = event => {
        event.preventDefault();
        // this.setState({ email_id: event.target.value })

        submitContactUsFormApi(formData, (res) => {
            if (res && res['success']) {
                //reset form
                this.setState({ name: "", phone: "", email_id: '', subject: "", message: "" });
                alert(res['success'])
            }
            else if (res.status === 500) {
                alert(res.data.error)
            }
        })
    }

    return (
        <>
            <form onSubmit={handelOnSubmit} className="row">
                <div className="form-group">
                    <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        placeholder="Name"
                        onChange={handleOnChange}
                        value={formData.name}
                        required=""
                    />
                </div>
                <div className="form-group ">
                    {/* number__ */}
                    {/* <PhoneInput
                            country='us'
                            regions={['north-america', 'carribean']}
                            value={this.state.phone}
                            onChange={this.handelPhone}
                        /> */}
                    <input
                        type="text"
                        autoComplete="off"
                        name="phone"
                        placeholder="Contact Number"
                        onChange={handleOnChange}
                        value={formData.phone}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        autoComplete="off"
                        name="email_id"
                        placeholder="Email"
                        onChange={handleOnChange}
                        value={formData.email_id}
                        required=""
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        autoComplete="off"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleOnChange}
                        value={formData.subject}
                        required=""
                    />
                </div>
                <div className="form-group textarea">
                    <textarea
                        type="text"
                        autoComplete="off"
                        name="message"
                        placeholder="Message"
                        onChange={handleOnChange}
                        value={formData.message}
                        required=""
                    ></textarea>
                </div>
                <div className="form-group btn-default text-center">
                    <button type="summit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}