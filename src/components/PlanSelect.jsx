import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
const PlanSelect=()=>{
    const {data, subscriptionPeriod, setSubscriptionPeriod, summary, setSummary} = useGlobalContext()

    function hasValue(obj,value) {
        return Object.keys(obj).some((key)=>obj[key]===value);
    }

    function changeSubscriptionType() {
        if (document.querySelector('#cb').checked) {
            setSubscriptionPeriod('monthly')
            document.querySelector('#cb').checked=false
        } else if (!document.querySelector('#cb').checked){
            setSubscriptionPeriod('yearly')
            document.querySelector('#cb').checked=true
        }
    }

    const addActiveToggle = () =>{
        if (subscriptionPeriod==="yearly") {
            document.querySelector('#cb').checked=true
        } else {
            document.querySelector('#cb').checked=false
        }
    }
    

useEffect(()=>{
    addActiveToggle();
})
    return (
        <section className="section section__info">
            <h1>Select Plan</h1>
            <p className="light-gray-text">You have the option of monthly or yearly billing</p>
            <p className='error_input error_input__plan'></p>

            <div className="plan-cards">
                <div className={`plan-card plan-card__arcade ${hasValue(summary,"arcade")?"plan-card--active":""}`} onClick={(e)=>{
                    setSummary({"plan": "arcade", "planCost": data[subscriptionPeriod].arcade})
                    }}>
                    <img src={iconArcade} alt="" />
                    <div>
                        <h2 className="plan-card__title">Arcade</h2>
                        <p className="plan-card__cost"><span>${data[subscriptionPeriod].arcade+"/"+data[subscriptionPeriod].unit}</span></p>
                    </div>
                    
                </div>
                <div className={`plan-card plan-card__advanced ${hasValue(summary,"advanced")?"plan-card--active":""}`} onClick={(e)=>{
                    setSummary({"plan": "advanced", "planCost": data[subscriptionPeriod].advanced})

                }}>
                    <img src={iconAdvanced} alt="" />
                    <div>
                        <h2 className="plan-card__title">Advanced</h2>
                        <p className="plan-card__cost"><span>${data[subscriptionPeriod].advanced+"/"+data[subscriptionPeriod].unit}</span></p>
                    </div>
                    
                </div>
                <div className={`plan-card plan-card__pro ${hasValue(summary,"pro")?"plan-card--active":""}`} onClick={(e)=>{
                    setSummary({"plan": "pro", "planCost": data[subscriptionPeriod].pro})
                }}>
                    <img src={iconPro} alt="" />
                    <div>
                        <h2 className="plan-card__title">Pro</h2>
                        <p className="plan-card__cost"><span>${data[subscriptionPeriod].pro+"/"+data[subscriptionPeriod].unit}</span></p> 
                    </div>
                    
                </div>
            </div>

            <section className="toggle">
                <p className={`${subscriptionPeriod==="monthly"?"marine-blue-text":""}`}>Monthly</p>
                {/* Rounded switch */}
                <label htmlFor='cb' className="switch" onClick={()=>{
                    changeSubscriptionType()
                    setSummary({})
                    }}>
                    <input type="checkbox" id="cb" />
                    <span className="slider round"></span>
                </label>
                <p className={`${subscriptionPeriod==="yearly"?"marine-blue-text":""}`}>Yearly</p>
            </section>

            
        </section>
    )
}

export default PlanSelect