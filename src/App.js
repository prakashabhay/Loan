import React, { useState } from "react";

import './App.css';
import Userform from "./components/Userform";
import LoanDetails from "./components/LoanDetails";
import Header from "./components/Header";
import useLocalStorage from './use-local-storage';

function App() {
  const initialValues = {
    name:"",
    amount:"",
    fee:"",
    apr:""
  }
  const [inputs,setInputs] = useState(initialValues)//useState(initialValues);
  const [loanData,setLoanData] = useLocalStorage('loanInfo', []);
  const [error, setError] = useState('');


  
  const onChangeForField = fieldName => ({target}) => setInputs(state => (
    {...state,[fieldName]:target.value}));

  const isValid = () => {
    const { name,amount, fee, apr } = inputs;
    let actualError = '';
    // Validate if there are values
    if (!amount || !name || !apr || !fee) {
      actualError = 'All the values are required';
    }
    // Validade if the values are numbers
    else if (isNaN(amount) || isNaN(fee) || isNaN(apr)) {
      actualError = 'Monthly Fee/Amount/APR must be a valid number';
    }
    // Validade if the values are positive numbers
    else if (Number(amount) <= 0 || Number(fee) <= 0 || Number(apr) <= 0) {
      actualError = 'Monthly Fee/Amount/APR must be a positive number';
    }
    if (actualError) {
      setError(actualError);
      return false;
    }
    return true;
  };
  const setDataTolocal = (state)=>{
    const data = [...state,inputs]
    return data;
  }
  const updateLoanData = (e)=>{
    e.preventDefault();
    if (isValid()) {
      setError('');
      setLoanData(setDataTolocal);
    }
    
    
  } 
  return (
    <div className="App">
      <Header></Header>
    <Userform onChange = {onChangeForField} updateLoanData={updateLoanData} error={error} ></Userform>
    <LoanDetails loanData={loanData}></LoanDetails>
    
    </div>
  );
}
export default App;