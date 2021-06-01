// import React, { Component } from "react";
import "./style.css";

function Form(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search by name"
            id="search"
          />
          <br />
        </div>
      </form>
    );
  }

export default Form;
