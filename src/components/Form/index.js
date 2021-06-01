import React from "react";

function Form(props) {
    return (
        <div className="container">
            <div className="row"> 
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Name"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        id="search" />
                    <button
                        className="btn btn-dark"
                        type="button" id="button-addon2">
                        Search
        </button>
                </div>
            </div>
        </div>
    );
}

export default Form;