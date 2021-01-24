import React from "react";

import  "./Userform.css";

function Userform({onChange,updateLoanData,error}) {
return(
    <main className="page-loan">
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <div className="page-loan__content">
                <div className="form-group row">
                    <label htmlFor="loan-icno" className="col-4 col-md-2 col-form-label">Name</label>
                    <div className="col-6 col-md-4 m10">
                        <input 
                            type="text" 
                            className={`form-control is-`}
                            name="name" 
                            onChange={onChange('name')}
                            />
                    </div>
                    <label htmlFor="loan-icno" className="col-4 col-md-2 col-form-label">Amount</label>
                    <div className="col-6 col-md-4">
                        <input 
                            type="number" 
                            className={`form-control is-`}
                            name="amount"
                            onChange={onChange('amount')}
                            />
                    </div> 
                </div>

                <div className="form-group row">
                    <label htmlFor="loan-name" className="col-4 col-md-2 col-form-label">Monthly Fee</label>
                    <div className="col-6 col-md-4 m10">
                        <input 
                            type="text" 
                            className={`form-control is-`}
                            name="monthly-fee"
                            onChange={onChange('fee')}
                            />
                    </div>

                    <label htmlFor="loan-name" className="col-4 col-md-2 col-form-label">APR</label>
                    <div className="col-6 col-md-4">
                        <input 
                            type="text" 
                            className={`form-control is-`}
                            name="APR" 
                            onChange={onChange('apr')}
                            />
                    </div>
                </div>
                <div className="row">
                <div className="col-md-10 col-sm-6">
                    <h5 className="error">{error}</h5>
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                    <button className="btn btn-success w-100" onClick={updateLoanData}>Save</button>
                </div>
            </div>
            </div>
        </div>
    </main>
);
}

export default Userform
