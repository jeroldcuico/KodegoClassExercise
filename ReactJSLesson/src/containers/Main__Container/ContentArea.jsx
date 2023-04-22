import React from "react";
import "./ContentArea.css";
import Staffs from "../../components/Staffs";
import Invoice from "../../components/Invoice";

function MainContent({ invoice, invoiceItems, data }) {
  return (
    <>
      <div className="container">
        <Invoice invoice={invoice} invoiceItems={invoiceItems} />
      </div>
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
