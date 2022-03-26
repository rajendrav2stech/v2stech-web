import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
// import { getPathName } from '../../UtilityComponents/getPathName';
import { submitContactUsFormApi } from '../functions/submitContactUsFormApi';
import PopUP from '../PopUp';


export default function CtaNewsletterContact({ formType }) {
    // 

    const [showMessage, setShowMessage] = useState(false)
    const handleClose = () => {
        setShowMessage(false)
    }
    const [formData, setFormData] = useState({
        form_type: formType,
        email_id: "",
        page_url: window.location.pathname
    })

    useEffect(() => {
        let active = true
        setTimeout(() => {
            setShowMessage(false)
        }, 3000);

        return () => {
            active = false
        }
    }, [showMessage])

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handelOnSubmit = event => {
        event.preventDefault();
        //this.setState({ email_id: event.target.value })

        submitContactUsFormApi(formData, (res) => {
            // if (res['success']) {
            //     //reset form
            setShowMessage(true)
            setFormData({ email_id: '' });
            //     alert(res['success'])
            // }
            // else if (res.status === 500) {
            //     alert(res.data.error)
            // }
        })
    }
    return (
        <Col md={6} >
            <div className="form_section">
                <form className="d-flex" onSubmit={handelOnSubmit}>
                    <div className="from-group">
                        <input
                            type="email"
                            autoComplete="off"
                            name="email_id"
                            placeholder="Email Id"
                            onChange={handleOnChange}
                            value={formData.email_id}
                            required
                        />
                    </div>
                    <div className="from-group btn-default"><button type='submit'>Submit</button></div>
                </form>
            </div>
            {
                showMessage &&
                <PopUP closeModal={handleClose} shouldModalOpen={showMessage}>
                    <span className="successfully_msg">Email is successfully send</span>
                </PopUP>
            }
        </Col>
    )
}
