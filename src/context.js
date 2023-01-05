import React from 'react';
import { useContext, useEffect, useState } from "react";

//1 create app context
const AppContext = React.createContext();

const AppProvider =({children})=>{
    const [currentStep, setCurrentStep] = useState(1);

    const prevStep=(stepNum)=>{
        if(stepNum>0){
            setCurrentStep(stepNum-1)
        }else{
            setCurrentStep(3)
        }
    }
    const nextStep=(stepNum)=>{
        if(stepNum<3){
            setCurrentStep(stepNum+1)
        }else{
            setCurrentStep(0)
        }
    }

    return(
        <AppContext.Provider 
        value={{currentStep, setCurrentStep, prevStep, nextStep}}
        >{children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }