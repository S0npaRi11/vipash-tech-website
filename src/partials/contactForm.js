import React, { useState } from 'react';

const contactForm = () => {

    const [name, setName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validateFrom = () => {

        let isNameValid = false,
            isBusinessNameValid = false,
            isEmailValid = false, 
            isMEssageValid = false;

        if(name !== ''){
            isNameValid = true
        }

        if(businessName !== ''){
            isBusinessNameValid = true
        }

        if(email !== ''){
            const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            isEmailValid  = check.test(email)
        }

        if(message !== ''){
            isMEssageValid = true
        }

        return(isNameValid && isBusinessNameValid && isEmailValid && isMEssageValid)
    }

    const submitForm = async (e) => {
        e.preventDefault()
 
        if(validateFrom()){
            const URL = 'https://businesssss-api.herokuapp.com/messages'

            const formData = {
                clientName: name,
                clientEmail: email,
                clientBusinessName: businessName,
                clientMessage: message
            }

            setName('')
            setEmail('')
            setMessage('')
            setBusinessName('')

            const data = await fetch(URL, {
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


        }else{
            alert('Please fill the form correctly')
        }
    }


    return (
        <React.Fragment>
            <form onSubmit={ submitForm } method="POST">
                <div className="form">
                    <label htmlFor="name"> Name </label> <br />
                    <input type="text" name="name" id="name" value={name} onChange={ (e) => setName(e.target.value) }/>

                    <br />

                    <label htmlFor="business-name"> Business Name </label> <br />
                    <input type="text" name="business-name" id="business-name" value={businessName} onChange={ (e) => setBusinessName(e.target.value)} />    

                    <br />

                    <label htmlFor="email"> email </label> <br />
                    <input type="email" name="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>  

                    <br />

                    <button type="submit" id="submit"> Submit </button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default contactForm
