import { useGlobalContext } from '../context';
const StepSideBar=()=>{
    const {currentStep} = useGlobalContext()
    return(
        <div className="sidebar">
            <div className="sidebar__step sidebar__step--1">
                <p className={`step__num-wrapper ${currentStep==0?"step__num-wrapper--active":""}`}><span>1</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 1</p>
                    <h5 className="step__subtitle">YOUR INFO</h5>
                </div>
            </div>
            <div className="sidebar__step sidebar__step--2">
                <p className={`step__num-wrapper ${currentStep==1?"step__num-wrapper--active":""}`}><span>2</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 2</p>
                    <h5 className="step__subtitle">SELECT PLAN</h5>
                </div>
            </div>
            <div className="sidebar__step sidebar__step--3">
                <p className={`step__num-wrapper ${currentStep==2?"step__num-wrapper--active":""}`}><span>3</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 3</p>
                    <h5 className="step__subtitle">ADD-ONS</h5>
                </div>
            </div>
            <div className="sidebar__step sidebar__step--4">
                <p className={`step__num-wrapper ${currentStep==3||currentStep==4?"step__num-wrapper--active":""}`}><span>4</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 4</p>
                    <h5 className="step__subtitle">SUMMARY</h5>
                </div>
            </div>
        </div>
    )
}

export default StepSideBar