// import React, { useState, useEffect } from 'react'
import './App.css';
import StepSideBar from './components/StepSideBar';
import Info from './components/Info';
import StepNavigate from './components/StepNavigate';
import PlanSelect from './components/PlanSelect';
import Addon from './components/Addon';
import Summary from './components/Summary';
import Thanks from './components/Thanks';
import { useGlobalContext } from './context';



function App() {
  const {currentStep, prevStep, nextStep} = useGlobalContext()
  const componentList = [<Info/>, <PlanSelect/>, <Addon />, <Summary />, <Thanks />]
    return(
      <main>
        <StepSideBar />
        <div className="content__wrapper">
          {componentList[currentStep]}
          <StepNavigate/>
        </div>
        
      </main>
    )
}

export default App;
