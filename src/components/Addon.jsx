const Addon=()=>{
    return(
        <section className="section section__addon">
            <h1>Pick add-ons</h1>
            <p className="light-gray-text">Add-ons enhance your gaming experience</p>

            <div className="form-group">
                <label htmlFor="online" className="addon-group">
                    <div className="checkbox-group">
                        <div><input type="checkbox" name="" id="online" /></div>
                        <div>
                            <h2>Online service</h2>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <div className="cost">+$<span>1/mo</span></div>
                </label>
                <label htmlFor="storage" className="addon-group">
                    <div className="checkbox-group">
                        <div><input type="checkbox" name="" id="storage" /></div>
                        <div>
                            <h2>Larger storage</h2>
                            <p>Extra 1TB of storage</p>
                        </div>
                    </div>
                
                    <div className="cost">+$<span>2/mo</span></div>
                </label>
                <label htmlFor="profile" className="addon-group">
                    <div className="checkbox-group">
                        <div><input type="checkbox" name="" id="profile" /></div>
                        <div>
                            <h2>Customizable profile</h2>
                            <p>Custom theme on your profile</p>
                        </div>
                    </div>
                    <div className="cost">+$<span>1/mo</span></div>
                </label>
            </div>
            
        </section>
    )
    
}

export default Addon