import React, { useState } from "react";

import './App.css';
import Userform from "./components/Userform";
import LoanDetails from "./components/LoanDetails";

function App() {
  const initialValues = {
    name:"",
    amount:"",
    fee:"",
    apr:""
  }
  const [inputs,setInputs] = useState(initialValues);
  const [loanData,setLoanData] = useState([]);

  const onChangeForField = fieldName => ({target}) => setInputs(state => (
    {...state,[fieldName]:target.value}));

  const updateLoanData = (e)=>{
    setLoanData([...loanData,inputs])
    
  } 
  return (
    <div className="App">
    <Userform onChange = {onChangeForField} updateLoanData={updateLoanData} ></Userform>
    <LoanDetails loanData={loanData}></LoanDetails>
    </div>
  );
}

export default App;
