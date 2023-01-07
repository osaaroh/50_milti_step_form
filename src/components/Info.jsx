const Info=()=>{
    return(
        <section className="section section__info">
            <h1>Personal Info</h1>
            <p className="light-gray-text">Please provide your name, email and phone number</p>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" placeholder="e.g Stephen King"/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="name" placeholder="e.g stephen@lorem.com"/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="" id="phone" placeholder="e.g +123 456 7890"/>
                </div>
            </div>
            
        </section>
    )
}

export default Info