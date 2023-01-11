import { useGlobalContext } from '../context';
import { isValid } from '../utils/validation';
const StepNavigate = ()=>{
    const {currentStep, prevStep, nextStep, summary, userInfo} = useGlobalContext()

    return(
        <div className="steps">
            <button className={`btn btn__prev ${currentStep===0?"hide":""}`} onClick={()=>prevStep(currentStep)}>Go back</button>
            <button className={`btn btn__next ${currentStep===3?"btn__confirm":""}`}  onClick={()=>{
                if(isValid(currentStep, {...summary,...userInfo})===true){
                    nextStep(currentStep)
                }else if(isValid(currentStep)===false){
                    return;
                }
                }
            }>{currentStep===3?"Confirm":"Next Step"}</button>
        </div>
    )
}
export default StepNavigate