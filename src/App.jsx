// import React, { useState, useEffect } from 'react'
import './App.css';
import StepSideBar from './components/StepSideBar';
import Info from './components/Info';
import StepNavigate from './components/StepNavigate';


function App() {
    return(
      <main>
        <StepSideBar />
        <div className="content__wrapper">
          <Info />
          <StepNavigate/>
        </div>
        
      </main>
    )
}

export default App;
