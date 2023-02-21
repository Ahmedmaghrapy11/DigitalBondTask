import React from "react";
import { Route, Routes } from "react-router-dom";
import AdmissionForm from "./components/AdmissionForm";
import ThankYou from "./components/ThankYou";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/form" element={<AdmissionForm/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
  );
}

export default App;
