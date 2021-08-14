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

        // check if name is valid
        if(name !== ''){
            // check for special characters in name (eg, < > @ ! & * etc) and filter those
            isNameValid = true
        }

        // check if business name is valid
        if(businessName !== ''){
            // check for special characters in name (eg, < > @ ! & * etc) and filter those
            isBusinessNameValid = true
        }

        // check if email is valid
        if(email !== ''){
            // check if email follows the format (example@something.something)
            // if not, return false
            // const check = /^[^\s@]+@[^\s@]+.$/
            const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            isEmailValid  = check.test(email)
        }

        // check if message is valid
        if(message !== ''){
            // check for special characters in name (eg, < > @ ! & * etc) and filter those
            isMEssageValid = true
        }

        // if everything is valid, then return true
        return(isNameValid && isBusinessNameValid && isEmailValid && isMEssageValid)
    }

    const submitForm = async (e) => {
        e.preventDefault()

        // form validation 
        if(validateFrom()){
            // form submit logic

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

            // console.log(formData)

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
            // show the message that says 'Form invalid'
            alert('Please fill the form correctly')
        }
    }


    return (
        <React.Fragment>
            {/* <h2 className="heading"> Contact Us </h2> */}

            <form onSubmit={ submitForm } method="POST">
                <div className="form">
                    <label htmlFor="name"> Name </label> <br />
                    <input type="text" name="name" id="name" onChange={ (e) => setName(e.target.value) }/>

                    <br />

                    <label htmlFor="business-name"> Business Name </label> <br />
                    <input type="text" name="business-name" id="business-name" onChange={ (e) => setBusinessName(e.target.value)} />    

                    <br />

                    <label htmlFor="email"> email </label> <br />
                    <input type="email" name="email" id="email" onChange={ (e) => setEmail(e.target.value)}/>  

                    <br />

                    <label htmlFor="message"> Message </label> <br />
                    <textarea name="message" name="meaasge" id="message" cols="20" rows="6" onChange={ (e) => setMessage(e.target.value)}></textarea> 

                    <br />

                    <button type="submit" id="submit"> Submit </button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default contactForm
