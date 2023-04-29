
import { useEffect, useState } from "react";

function UpdateEmployee({ profileInfo, onSave }) {

  const [profileInformation, setprofileInfo] = useState(profileInfo);
  const { id, firstName, lastName, age, gender, jobTitle } = profileInformation;

  const onChangeProfile = (e) => {
    const { name, value } = e.target;
    const newData = { ...profileInformation, [name]: value };
    setprofileInfo(newData);
  };

  useEffect(() => {
    setprofileInfo(profileInfo);
  }, [profileInfo]);


  const onSaveClickHandler = () => {
    onSave(profileInformation);
  };

  return (
    <>
      <div className="card">
        <div className="card-body text-dark">
          <input type="hidden" name="id" value={id} />
          <div>
            <label className="form-label" >FirstName:  </label>
            <input type="text" name="firstName" className="form-control" value={firstName} onChange={onChangeProfile}
            />
          </div>
          <div>
            <label className="form-label">LastName:  </label>
            <input type="text" name="lastName" className="form-control" value={lastName} onChange={onChangeProfile}
            />
            <div>
              <label className="form-label">Job Title:  </label>
              <input type="text" name="jobTitle" className="form-control" value={jobTitle} onChange={onChangeProfile}
              />
            </div>
          </div>
          <div>
            <label className="form-label">Age:  </label>
            <input type="text" name="age" className="form-control" value={age} onChange={onChangeProfile}
            />
          </div>
          <div>
            <label className="form-label">Gender: </label>
            <input type="text" name="gender" className="form-control" value={gender} onChange={onChangeProfile}
            />
          </div>
        </div>

        <div className="card-footer">
          <button className="btn btn-primary" onClick={onSaveClickHandler}>Save</button>
          <button className="btn btn-danger me-3" data-bs-dismiss="modal">Cancel</button>
        </div>

      </div>
    </>
  );
}

export default UpdateEmployee;
