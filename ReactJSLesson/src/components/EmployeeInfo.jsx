function EmployeeInfo({ profileInfo , onEdit , onDel}) {
  const { id, firstName, lastName, age, gender, jobTitle } = profileInfo;

  const onEditClickHandler = () =>{
    onEdit(profileInfo)
  }
  const onDeleteClickHandler = () =>{
    onDel(profileInfo)
  }
  return (
    <>
      <div className="card" style={{ width: 400 }}>
        <div className="card-body text-dark">
          <h5 className="card-title">{firstName + " " + lastName}</h5>
          <p className="card-text">{jobTitle}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Company ID: {id}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Gender: {gender}</li>
        </ul>
        <div className="card-body d-flex gap-2">
          <button className="btn btn-primary" onClick={onEditClickHandler} data-bs-toggle="modal" data-bs-target="#Profilemodal" >
            Edit Employee
          </button>
          <button className="btn btn-danger" onClick={onDeleteClickHandler}>Delete Employee</button>
        </div>
      </div>
    </>
  );
}

export default EmployeeInfo;
