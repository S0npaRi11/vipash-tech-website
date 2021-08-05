import React, { useState } from 'react';
import Fade from 'react-reveal/Fade'

const hero = ({ id, title }) => {

    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const [businessName, setBusinessName] = useState('')

    const validateFrom = () => {

        let isNameValid = false,
            isBusinessNameValid = false,
            isEmailValid = false;

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

        return(isNameValid && isBusinessNameValid && isEmailValid)
    }

    const sendMessage = async (e) => {
        e.preventDefault()
        if(validateFrom()){

            const URL = 'https://businesssss-api.herokuapp.com/messages'

            const formData = {
                clientName: name,
                clientEmail: email,
                clientBusinessName: businessName,
            }

            setName('')
            setEmail('')
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
        <section id={id} className="grid-12 mgrid">
            <div className="container">
                <div className="hero-text">
                    <div className="container">
                        <Fade left duration={800}>
                            <h1> { title } </h1>
                        </Fade>
                    </div>
                </div>
            </div>
            { title &&  
                <div className="hero-form">
                    <form onSubmit={sendMessage} method="POST">
                        <input type="text" name="name" id="name" placeholder="enter name" value={name} onChange={ (e) => setName(e.target.value) } /> <br />
                        <input type="text" name="businessName" id="businessName" placeholder="enter business name" value={businessName} onChange={ (e) => setBusinessName(e.target.value) } /> <br />
                        <input type="email" name="email" id="email" placeholder="enter email" value={email} onChange={ (e) => setEmail(e.target.value) } /> <br />
                        <button type="submit" id="submit"> Get in touch </button>
                    </form>
                </div>
            }
        </section>
    )
}

export default hero
