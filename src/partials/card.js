const card = ({ heading, text, icon }) => {
    return (
        <div className="card">
            { icon && <div className="icon"> { icon } </div> }
            { heading &&   <div className="heading"> { heading } </div>} 
            { text &&  <div className="text"> { text } </div>}  
        </div>
    )
}

export default card
