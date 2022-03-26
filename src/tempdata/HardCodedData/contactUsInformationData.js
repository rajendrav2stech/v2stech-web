// Pages :: Used in header, footer and contact us :: 
// Contact information about Sales, hr department and address

import { CTCONTACTUS, CTMAIL, CTWHATAPP } from "../../assets/images/Index";

export const contactUsInformationData = {
    sales: {
        title: "Business Queries",
        phoneNumbers: { image: CTCONTACTUS, numbers: ["001 (862) 248 1260", "8736478234", "74872348732"] },
        email: { image: CTMAIL, emailId: "sales@v2stech.com" },
        whatsApp: { image: CTWHATAPP, numbers: ["+ 1 (862) 248 1260", "8736478234", "74872348732"] },
    },
    address: {
        title: "Our Address",
        image: "",
        primary: "V2STech Solutions Pvt. Ltd. /n 501, 9 Mansi, Cross Lane no.1, /n Ram Maruti road,  /n near Gaondeviground, Thane (West),  /n Maharashtra - 400602",
        secondary: "V2STech Solutions Pvt. Ltd.501, 9 Mansi, Cross Lane no.1, Ram Maruti road, near Gaondeviground, Thane (West), Maharashtra - 400602"
    },
    careers: {
        title: "Careers",
        text: 'For latest vacancies visit our Careers page.'
    },
    hrDepartment: {
        title: "HR Department",
        phoneNumbers: { image: CTCONTACTUS, numbers: ["+91 8949858001", "+91 90281 40336", "74872348732"] },
        email: { image: CTMAIL, emailId: "hr@v2stech.com" },
        whatsApp: { image: CTWHATAPP, numbers: ["8374823744", "8736478234", "74872348732"] }
    },
}

