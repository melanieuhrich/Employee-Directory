import React from "react";

function TableHeading() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr className="row">
                                <th scope="col" className="col">Image</th>
                                <th scope="col" className="col">Name</th>
                                <th scope="col" className="col">Email</th>
                                <th scope="col" className="col">Phone Number</th>
                                <th scope="col" className="col">DOB</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default TableHeading;