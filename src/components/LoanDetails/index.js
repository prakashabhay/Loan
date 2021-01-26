import React from "react";

import BootstrapTable from 'react-bootstrap-table-next';

function LoanDetails({ loanData }) {

  const getTotalApr = (columnData)=>{     
    let totalValue = columnData.length>0 &&columnData.reduce((acc, item) => parseInt(acc) + parseFloat(item), 0)     
    return loanData.length>0 ?(totalValue/loanData.length).toFixed(2):0   
  }

      const columns = [{
        dataField: 'name',
        text: 'Creditor Name',
        footerAlign: 'center',
        footer: 'Total'
      }, {
        dataField: 'amount',
        text: 'Loan amount',
        footer: (columnData => columnData.reduce((acc, item) => parseInt(acc) + parseInt(item), 0)+'kr')
      }, {
        dataField: 'fee',
        text: 'Monthly fees',
        footer: (columnData => columnData.reduce((acc, item) => parseInt(acc) + parseInt(item), 0)+'kr')
      },{
        dataField: 'apr',
        text: 'APR',
        footer: columnData =>getTotalApr(columnData)+"%"
      }];
    return (
        <div className="container-fluid">
            <BootstrapTable keyField='id' bordered={false} striped ={true} data={ loanData } columns={ columns } classes="custom-row-class"/>
        </div>
      );
}

export default LoanDetails
