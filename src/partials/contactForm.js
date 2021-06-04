const contactForm = () => {
    return (
        <>
            <h2 className="heading"> Contact Us </h2>

            <div className="form">
                <label htmlFor="name"> Name </label> <br />
                <input type="text" id="name"/>

                <br />

                <label htmlFor="business-name"> Business Name </label> <br />
                <input type="text" id="businessName"/>    

                <br />

                <label htmlFor="email"> email </label> <br />
                <input type="email" id="email"/>  

                <br />

                <label htmlFor="name"> Message </label> <br />
                <textarea name="message" id="message" cols="20" rows="6"></textarea> 

                <br />

                <button type="submit" id="submit"> Submit </button>
            </div>
        </>
    )
}

export default contactForm
