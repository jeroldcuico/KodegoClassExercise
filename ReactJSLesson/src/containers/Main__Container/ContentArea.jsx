import React, { useEffect, useState } from "react";
import "./ContentArea.css";
import Staffs from "../../components/Staffs";
import Invoice from "../../components/Invoice";
import InvoiceList from "../../components/InvoiceList";
import EmployeeList from "../../components/EmployeeList";

function MainContent({ data, invoice, invoiceItems }) {
  return (
    <>
      <section>
        <div className="container bg-danger">
          <EmployeeList/>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>InvoiceList Area</h1>
          <InvoiceList invoice={invoice} invoiceItems={invoiceItems} />
        </div>
      </section>
      <section className="bg-warning">
        <div className="container">
          <h1 className="text-dark">Invoice Area</h1>
          <Invoice invoice={invoice} invoiceItems={invoiceItems} />
        </div>
      </section>
      <section className="bg-success">
        <div className="container">
          <h1>Staff Area</h1>
          <div className="row gap-2 d-flex align-items-center justify-content-center">
            {data.map((students, index) => (
              <Staffs data={students} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default MainContent;
