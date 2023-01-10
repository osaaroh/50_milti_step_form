import { useEffect } from "react";
import { useGlobalContext } from "../context"

const Addon=()=>{
    const {data, subscriptionPeriod, summary, setSummary} = useGlobalContext()

    let online_checkbox ;
    let storage_checkbox ;
    let profile_checkbox ;

    const initializeCheckboxes=()=>{
        online_checkbox = document.querySelector('#online');
        storage_checkbox = document.querySelector('#storage');
        profile_checkbox = document.querySelector('#profile');
    }

    const checkboxStateFromContext=()=>{
        summary.hasOwnProperty("Online service")?online_checkbox.checked=true:online_checkbox.checked=false;
        summary.hasOwnProperty("Larger storage")?storage_checkbox.checked=true:storage_checkbox.checked=false;
        summary.hasOwnProperty("Customizable profile")?profile_checkbox.checked=true:profile_checkbox.checked=false;
    }


    useEffect(()=>{
        initializeCheckboxes();
        checkboxStateFromContext();
    })

    return(
        <section className="section section__addon">
            <h1>Pick add-ons</h1>
            <p className="light-gray-text">Add-ons enhance your gaming experience</p>

            <div className="form-group">
                <label htmlFor="online" className="addon-group" onClick={()=>{
                    if (online_checkbox.checked) {
                        setSummary({...summary, "Online service": data[subscriptionPeriod].online })
                    } else {
                        if (summary.hasOwnProperty("Online service")) {
                            delete summary["Online service"];
                        }
                    }
                    
                }}>
                    <div className="checkbox-group">
                        <div><input type="checkbox" name="" id="online" /></div>
                        <div>
                            <h2>Online service</h2>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <div className="cost">+$<span>{data[subscriptionPeriod].online+"/"+data[subscriptionPeriod].unit}</span></div>
                </label>
                <label htmlFor="storage" className="addon-group" onClick={()=>{
                    if (storage_checkbox.checked) {
                        setSummary({...summary, "Larger storage": data[subscriptionPeriod].storage })
                    } else {
                        if (summary.hasOwnProperty("Larger storage")) {
                            delete summary["Larger storage"];
                        }
                    }
                    
                }}>
                    <div className="checkbox-group">
                        <div><input type="checkbox" name="" id="storage" /></div>
                        <div>
                            <h2>Larger storage</h2>
                            <p>Extra 1TB of storage</p>
                        </div>
                    </div>
                
                    <div className="cost">+$<span>{data[subscriptionPeriod].storage+"/"+data[subscriptionPeriod].unit}</span></div>
                </label>
                <label htmlFor="profile" className="addon-group" onClick={()=>{
                    if (profile_checkbox.checked) {
                        setSummary({...summary, "Customizable profile": data[subscriptionPeriod].profile })
                    } else {
                        if (summary.hasOwnProperty("Customizable profile")) {
                            delete summary["Customizable profile"];
                        }
                    }
                    
                }}>
                    <div className="checkbox-group">
                        <div><input type="checkbox" name="" id="profile" /></div>
                        <div>
                            <h2>Customizable profile</h2>
                            <p>Custom theme on your profile</p>
                        </div>
                    </div>
                    <div className="cost">+$<span>{data[subscriptionPeriod].profile+"/"+data[subscriptionPeriod].unit}</span></div>
                </label>
            </div>
            
        </section>
    )
    
}

export default Addon