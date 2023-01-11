import { useGlobalContext } from "../context"

const Summary=()=>{
    const {data, setCurrentStep,  subscriptionPeriod, summary} = useGlobalContext()

    let totalCost = 0
    let summaryObjectsKeys = Object.keys(summary)
    // let summaryObjectsValues = Object.values(summary)
    // summaryObjectsKeys.forEach((summaryObject) => {console.log(summary[summaryObject])})
    // summaryObjectsKeys =  ['plan', 'Online service', 'Larger storage']
    summaryObjectsKeys.filter((summaryObject)=>summaryObject!=='plan').forEach((key) => {
        totalCost += summary[key];
    });
    

    return(
        <section className="section section__summary">
            <h1>Finishing up</h1>
            <p className="light-gray-text">Double-check everything looks OK before confirming</p>

            <div className="form-group form-group__summary">
                <div className="summary-group">
                    <div>
                        <h2>{summary.plan} ({subscriptionPeriod})</h2>
                        <a href="#change" onClick={(e)=>{
                            e.preventDefault();
                            setCurrentStep(1)}
                            }>Change</a>
                    </div>
                    <div className="cost">$<span>{data[subscriptionPeriod][summary.plan]}</span></div>
                </div>
                <hr className="plan__divider" />
                {
                    summaryObjectsKeys.filter((summaryObject)=>summaryObject!=='plan'&&summaryObject!=='planCost').map((summaryObject, i) => {
                    return <div className="summary-group" key={i}>
                        <p className="light-gray-text">{summaryObject }</p>
                        <div className="cost">+$<span>{summary[summaryObject]}</span></div>
                    </div>
                    })
                } 
                <div className="summary-group">
                    <p className="light-gray-text">Total ({subscriptionPeriod})</p>
                    <div className="cost__total">$<span>{totalCost}/{data[subscriptionPeriod].unit}</span></div>
                </div>
                
            </div>
        </section>
    )

}

export default Summary