import { useGlobalContext } from '../context';
const StepNavigate = ()=>{
    const {currentStep, prevStep, nextStep} = useGlobalContext()

    return(
        <div className="steps">
            <button className={`btn btn__prev ${currentStep===0?"hide":""}`} onClick={()=>prevStep(currentStep)}>Go back</button>
            <button className="btn btn__next"  onClick={()=>nextStep(currentStep)}>Next Step</button>
        </div>
    )
}
export default StepNavigate