import React from "react";

function Staffs({ data }) {
  const { name, title, gender, age, languages } = data;
  return (
    <>
      <div className="card" style={{ width: 300 }}>
        <div className="card-body text-dark">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{gender}</li>
          <li className="list-group-item">{age}</li>
          <li className="list-group-item">{languages}</li>
        </ul>
        <div className="card-body d-flex gap-2">
          <a href="#" className="btn btn-primary">
            Subscribe
          </a>
          <a href="#" className="btn btn-danger">
            Promote
          </a>
        </div>
      </div>
    </>
  );
}

export default Staffs;
