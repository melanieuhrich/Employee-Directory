import React from "react";
import "./style.css";

function EmployeeCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.name}
          </li>
          <li>
            {props.email}
          </li>
          <li>
            {props.phone}
          </li>
          <li>
            {props.dob}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
