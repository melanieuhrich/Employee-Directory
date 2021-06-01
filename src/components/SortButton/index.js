import React from "react";

function Button(props) {
  return (
    <div className="container">
      <div className="row">
        <button type="button" className="btn btn-dark" onClick={props.sort}>Sort By Name</button>
      </div>
    </div>
  );
}

export default Button;

