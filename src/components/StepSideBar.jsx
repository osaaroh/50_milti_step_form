const StepSideBar=()=>{
    return(
        <div className="sidebar">
            <div className="sidebar__step sidebar__step--1">
                <p className="step__num-wrapper step__num-wrapper--active"><span>1</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 1</p>
                    <h5 className="step__subtitle">YOUR INFO</h5>
                </div>
            </div>
            <div className="sidebar__step sidebar__step--2">
                <p className="step__num-wrapper"><span>2</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 2</p>
                    <h5 className="step__subtitle">SELECT PLAN</h5>
                </div>
            </div>
            <div className="sidebar__step sidebar__step--3">
                <p className="step__num-wrapper"><span>3</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 3</p>
                    <h5 className="step__subtitle">ADD-ONS</h5>
                </div>
            </div>
            <div className="sidebar__step sidebar__step--4">
                <p className="step__num-wrapper"><span>4</span></p>
                <div className="sidebar__step-wrapper">
                    <p className="step__title">STEP 4</p>
                    <h5 className="step__subtitle">SUMMARY</h5>
                </div>
            </div>
        </div>
    )
}

export default StepSideBar