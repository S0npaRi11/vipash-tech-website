import React, {useState,Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'

import { storage } from '../config/Firebase'

const SecondaryNav = lazy(() => import('../partials/secondaryNav'))
const Header = lazy(() => import('../partials/header'))
const SecondaryFooter = lazy(() => import('../partials/secondaryFooter'))

const complaint = () => {

    const [name, setName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [complaint, setComplaint] = useState('')
    const [proof, setProof] = useState('')

    const validateForm = () => {
        let isNameValid = false,
            isBusinessNameValid = false,
            isEmailValid = false,
            isComplaintValid = false,
            isProofValid = false;

        if(email){
            const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            isEmailValid  = check.test(email)
        }

        if(name) isNameValid = true
        if(businessName) isBusinessNameValid = true
        if(complaint) isComplaintValid = true
        if(proof) isProofValid = true

        return( isNameValid && isBusinessNameValid && isComplaintValid && isEmailValid && isProofValid)

    }

    const fileComplaint = (e) => {
        e.preventDefault()
        if(validateForm()){
            const uploadTask = storage.ref(`proof/${proof.name}`).put(proof)

            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    alert('Error while uploading proof. \n Please try again later')
                },
                () => {
                    storage
                        .ref("proof")
                        .child(proof.name)
                        .getDownloadURL()
                        .then(async url => {
                            const URL = 'https://businesssss-api.herokuapp.com/complaints'

                            const formData = {
                                name: name,
                                businessName: businessName,
                                email: email,
                                complaint: complaint,
                                proof: url
                            }

                            const data = await fetch(URL,{
                                method: 'POST',
                                headers:{
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(formData)
                            })

                            if(data.status === 201){
                                alert('Thank you for your request!! \n We will contact you back via email within 2 to 3 working days.')
                            }else{
                                alert('There seems to be a problem with server corrently. Try again after a little while. \n Sorry for the inconvenience')
                            }
                        })
                }
            )
        }else{
            alert('Please fill the form correctly')
        }
    }

    return (
        <React.Fragment>
            <Suspense fallback={<div className="loader"> Loading... </div>}>

            <Helmet>
                <title> File Complaint - Vipash Technologies </title>
            </Helmet>

            <SecondaryNav />

            <Header heading={ 'Complaint' }/>

            <div id="content">
                <div className="container w-center" >

                    <form onSubmit={ fileComplaint }>

                        <label htmlFor="name"> Name </label> <br />
                        <input name="name" type="text" id="complaint-name" onChange={(e) => setName(e.target.value)} />

                        <br />

                        <label htmlFor="business name"> Business Name </label> <br />
                        <input  name="business-name" type="text" id="complaint-business-name" onChange={(e) => setBusinessName(e.target.value)} />

                        <br />

                        <label htmlFor="email"> Email </label> <br />
                        <input name="email" type="email" id="complaint-email" onChange={(e) => setEmail(e.target.value)} />

                        <br />

                        <label htmlFor="complaint"> Brief Complaint </label> <br />
                        <textarea  name="complaint" id="complaint-brief-complaint" cols="20" rows="6" onChange={(e) => setComplaint(e.target.value)} ></textarea> 

                        <br />

                        <label htmlFor="proof"> Upload an image </label> <br />
                        <input  type="file" name="proof" id="complaint-proof" onChange={(e) => setProof(e.target.files[0])} />

                        <button type="submit" id="complaint-submit"> Submit </button>
                    </form>
                </div>
            </div>

            <SecondaryFooter />
            
            </Suspense>
        </React.Fragment>
    )
}

export default complaint
