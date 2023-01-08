import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
const PlanSelect=()=>{
    const cb = document.querySelector('#cb');

function showHide() {
    if (document.querySelector('#cb').checked) {
        alert('Agbadooooo')
        document.querySelector('#cb').checked=false
    } else{
        alert('is is for garri?')
        document.querySelector('#cb').checked=true
    }
}


// cb.addEventListener('click', showHide)
    return (
        <section className="section section__info">
            <h1>Select Plan</h1>
            <p className="light-gray-text">You have the option of monthly or yearly billing</p>

            <div className="plan-cards">
                <div className="plan-card plan-card__arcade">
                    <img src={iconArcade} alt="" />
                    <div>
                        <h2 className="plan-card__title">Arcade</h2>
                        <p className="plan-card__cost">$9/mo</p>
                    </div>
                    
                </div>
                <div className="plan-card plan-card__advanced">
                    <img src={iconAdvanced} alt="" />
                    <div>
                        <h2 className="plan-card__title">Advanced</h2>
                        <p className="plan-card__cost">$12/mo</p>
                    </div>
                    
                </div>
                <div className="plan-card plan-card__arcade">
                    <img src={iconPro} alt="" />
                    <div>
                        <h2 className="plan-card__title">Pro</h2>
                        <p className="plan-card__cost">$15/mo</p> 
                    </div>
                    
                </div>
            </div>

            <section class="toggle">
                <p>Monthly</p>
                {/* Rounded switch */}
                <label for="cb" class="switch" onClick={()=>{showHide()}}>
                    <input type="checkbox" id="cb" />
                    <span class="slider round"></span>
                </label>
                <p>Yearly</p>
            </section>

            
        </section>
    )
}

export default PlanSelect