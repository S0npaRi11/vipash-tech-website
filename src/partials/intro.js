const intro = () => {
    return (
        <section id="intro">
            <h2 className="heading"> Portfolio </h2>

            <div className="container">
                <div className="grid-23 mgrid">
                    <div className="card"> <div className="text"> Project 1 </div> </div>
                    <div className="card"> <div className="text"> Project 2 </div> </div>
                    <div className="card"> <div className="text"> Project 3 </div> </div>
                    <div className="card"> <div className="text"> Project 4 </div> </div>
                    <div className="card col-3"> More Projects <button> View More </button> </div>
                </div>
            </div>

        </section>
    )
}

export default intro
