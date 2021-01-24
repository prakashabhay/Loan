import React from "react"
import  "./Userform.css"

function Userform({onChange,updateLoanData}) {
return(
    <main className="page-loan">
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <div className="text-center page-loan__header">
                <h1>Loan Application</h1>
            </div>

            <div className="page-loan__content">
                <div className="form-group row">
                    <h4>Personal Data</h4>
                </div>

                <div className="form-group row">
                    <label htmlFor="loan-icno" className="col-4 col-md-2 col-form-label">Name</label>
                    <div className="col-6 col-md-4">
                        <input 
                            type="text" 
                            className={`form-control is-`}
                            name="name" 
                            onChange={onChange('name')}
                            />
                        
                        <div className={`-feedback`}>
                            
                        </div>
                    </div>
                    <label htmlFor="loan-icno" className="col-4 col-md-2 col-form-label">Amount</label>
                    <div className="col-6 col-md-4">
                        <input 
                            type="number" 
                            className={`form-control is-`}
                            name="amount"
                            onChange={onChange('amount')}
                            />
                        
                        <div className={`-feedback`}>
                            
                        </div>
                    </div> 
                </div>

                <div className="form-group row">
                    <label htmlFor="loan-name" className="col-4 col-md-2 col-form-label">Monthly Fee</label>
                    <div className="col-6 col-md-4">
                        <input 
                            type="text" 
                            className={`form-control is-`}
                            name="monthly-fee"
                            onChange={onChange('fee')}
                            />
                        
                        <div className={`-feedback`}>
                        </div>
                    </div>

                    <label htmlFor="loan-name" className="col-4 col-md-2 col-form-label">APR</label>
                    <div className="col-6 col-md-4">
                        <input 
                            type="text" 
                            className={`form-control is-`}
                            name="APR" 
                            onChange={onChange('apr')}
                            />
                        
                        <div className={`-feedback`}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row page-loan__footer">
                <div className="col-12 text-center">
                    <button className="btn btn-success w-100" onClick={updateLoanData}>Save</button>
                </div>
            </div>
        </div>
    </main>
);
}

export default Userform
