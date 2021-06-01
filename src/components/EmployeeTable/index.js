import React from "react";
import moment from 'moment';

function EmployeeTable(props) {

  return (
    <div className="container">
      <table className="table table-striped">
        <tbody>
          <tr className="row">
            <td className="col"><img alt={props.name} src={props.image} /></td>
            <td className="col">{props.name}</td>
            <td className="col">{props.email}</td>
            <td className="col">{props.phone}</td>
            <td className="col">{moment(props.dob.date).format('MM/DD/YYYY')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;