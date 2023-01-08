const Summary=()=>{
    return(
        <section className="section section__summary">
            <h1>Finishing up</h1>
            <p className="light-gray-text">Double-check everything looks OK before confirming</p>

            <div className="form-group">
                <div className="summary-group">
                    <div>
                        <h2>Arcade (Monthly)</h2>
                        <a href="#change">Change</a>
                    </div>
                    <div className="cost">$9<span>9/mo</span></div>
                </div>
                <hr className="plan__divider" />
                <div className="summary-group">
                    <p>Online service</p>
                    <div className="cost">+$<span>1/mo</span></div>
                </div>
                <div className="summary-group">
                    <p>Larger storage</p>
                    <div className="cost">+$<span>2/mo</span></div>
                </div>
                <div className="summary-group">
                    <p>Total (per month)</p>
                    <div className="cost">+$<span>12/mo</span></div>
                </div>

                <div>
                    
                </div>
                
            </div>
            
        </section>
    )

}

export default Summary