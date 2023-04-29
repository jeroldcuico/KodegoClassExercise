import { useEffect, useState } from "react";
import apiService from "../function/apiService";
import EmployeeInfo from "./EmployeeInfo";
import UpdateEmployee from "./UpdateEmployee";
import {Modal} from 'react-bootstrap'

function EmployeeList() {
    const [employeeList, setemployeeList] = useState([]);
    const [count, setCount] = useState(0);

    const getEmployees = () => {
        //? Get Employees!
        apiService("/employees", null, (data) => {
            setemployeeList(data);
        });

        //? Count All Stored Employees
        apiService("/employees/count/all", null, (data) => {
            setCount(data.count);
        });
    };

    //!Initialization to page
    useEffect(() => {
        getEmployees();
    }, []);

    //!Search Function
    const [search, setSearch] = useState('');
    const searchFunction = (e) => {
        setSearch(e.target.value);
        //? Search to APi
        apiService(`/employees/search/${e.target.value}`, null, (data) => {
            setemployeeList(data);
        });
    };

    //! Get Employee by ID
    const [empDetails, setempDetails] = useState({});
    const EmployeeInformation = (profileInfo) => {
        //? Search to APi
        apiService(`/employees/${profileInfo.id}`, null, (data) => {
            setempDetails(data);
        });
    };


    //! Add Employee 

    const handleAddEmployee = () => {
        setempDetails({ id: 0 });
    };

    //! Save Employee
    const handleSave = (formData) => {
        console.log(formData);
        apiService(`/employees/${formData.id}`, formData, (data) => {
            getEmployees();
        }, formData.id === 0 ? "POST" : "PUT");
    };
    //Modal
    const [modal, setModal] = useState(false);
    //! Delete Employee
    const handleDeleteEmployee = (formData) => {
        setempDetails(formData);
        setModal(true)
    };

    const doConfirmedDeleteHandler = () =>{
        doCloseConfirmHandler();
        apiService(`/employees/${empDetails.id}`, empDetails, (data)=>{
            console.log(data);
            getEmployees();
        }, "DELETE");
    }

    const doCloseConfirmHandler = () =>{
        setModal(false);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <input className="form-control" value={search} onChange={searchFunction} placeholder="Search by Name" />
                        </form>
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#Profilemodal" onClick={handleAddEmployee} >Add Employee</button>
                    </div>
                </div>
            </div>
            <div className="row gap-2 d-flex align-items-center justify-content-center">

                <h2>
                    Employee Total: <span className="text-dark">{count} </span>
                </h2>
                {employeeList.map((item, idx) => (
                    <EmployeeInfo key={idx} profileInfo={item} onEdit={EmployeeInformation} onDel={handleDeleteEmployee}/>
                ))}

                <div id="Profilemodal" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Employee Information</h4>
                                <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <UpdateEmployee profileInfo={empDetails} onSave={handleSave} />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={modal}>
                    <Modal.Header>
                        <Modal.Title>Confirm Delete</Modal.Title>
                        <button type="button" className="btn-close btn-sm" onClick={doCloseConfirmHandler}></button>
                    </Modal.Header>
                    <Modal.Body>
                        <h4 className="text-center mb-5">Are you sure you want to DELETE this record?</h4>
                        <div className="text-center">
                            <button className="btn btn-primary me-3 px-5" onClick={doCloseConfirmHandler}>No</button>
                            <button className="btn btn-success px-5" onClick={doConfirmedDeleteHandler}>Yes</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default EmployeeList;
