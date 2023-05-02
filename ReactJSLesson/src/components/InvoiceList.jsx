import { useEffect, useState } from "react";

function InvoiceList({ invoice, invoiceItems }) {
  /* States */

  const [itemsInvoice, setItemsInvoice] = useState([]);
  const [itemsDetails, setitemsDetails] = useState({});

  useEffect(() => {
    setItemsInvoice(invoiceItems);
    setitemsDetails(invoice);
  }, [invoiceItems]);

  const { invoiceTo, date, address1, address2, invoiceNumber, paymentMode } =
    itemsDetails;

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedItems = [...itemsInvoice];
    name === "description" || name === ""
      ? (updatedItems[index][name] = value)
      : (updatedItems[index][name] = parseInt(value));
    setItemsInvoice(updatedItems);
  };

  const handleDetails = (event) => {
    const { name, value } = event.target;
    const updatedItems = { ...itemsDetails, [name]: value };
    setitemsDetails(updatedItems);
  };
  const paddedValue = invoiceNumber && invoiceNumber.padStart(10, "0");

  const getTotal = () => {
    return itemsInvoice.reduce((total, item) => {
      return total + item.Qty * item.unitPrice;
    }, 0);
  };

  const addNewItem = () => {
    const newItem = { description: "Enter Item", Qty: 0, unitPrice: 0 };
    setItemsInvoice([...itemsInvoice, newItem]);
  };
  const handleDelete = (index) => {
    //const updatedItems = itemsInvoice.filter((item, i) => i !== index);
    const updatedItems = [...itemsInvoice];
    updatedItems.splice(index, 1);
    setItemsInvoice(updatedItems);
  };

  const handleDeleteAll = () => {
    const deleteAll = [...itemsInvoice];
    deleteAll.length = 0;
    setItemsInvoice(deleteAll);
  };

  const handleSubmitInvoice = (e) => {
    e.preventDefault();
    const details = {
      ...itemsDetails,
      itemDetails: [...itemsInvoice],
      totalItems: getTotal(),
    };
    setitemsDetails(details);
    console.log(details);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container mb-5 mt-3">
            <div className="row d-flex align-items-baseline">
              <h2 className="text-dark">
                Invoice Number:
                <input
                  type="text"
                  name="invoiceNumber"
                  readOnly
                  disabled
                  className="form-control"
                  value={paddedValue}
                />
              </h2>
              <hr />
            </div>

            <div className="container">
              <form onSubmit={handleSubmitInvoice} autoComplete="off">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="list-unstyled">
                      <li className="text-muted">
                        <strong>Invoice to: </strong>
                        <input
                          type="text"
                          className="form-control"
                          name="invoiceTo"
                          value={invoiceTo}
                          onChange={(e) => handleDetails(e)}
                        />
                      </li>
                      <li className="text-muted">
                        <strong>Address 1: </strong>
                        <input
                          type="text"
                          className="form-control"
                          name="address1"
                          value={address1}
                          onChange={(e) => handleDetails(e)}
                        />
                      </li>
                      <li className="text-muted">
                        <strong>Address 2: </strong>
                        <input
                          type="text"
                          className="form-control"
                          name="address2"
                          value={address2}
                          onChange={(e) => handleDetails(e)}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-unstyled">
                      <li className="text-muted">
                        <span className="fw-bold">Mode of Payment:</span>
                        <input
                          type="text"
                          className="form-control"
                          name="paymentMode"
                          value={paymentMode}
                          onChange={(e) => handleDetails(e)}
                        />
                      </li>
                      <li className="text-muted">
                        <span className="fw-bold">Invoice Date: </span>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          value={date}
                          onChange={(e) => handleDetails(e)}
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row my-2 mx-1 justify-content-center">
                  <table
                    className="table table-striped table-dark table-borderless"
                    id="invoiceTable"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Action</th>
                        <th scope="col">Description</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemsInvoice.length === 0 && (
                        <tr>
                          <td align={"center"} colSpan={5}>
                            No records
                          </td>
                        </tr>
                      )}
                      {itemsInvoice?.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="description"
                              className="form-control"
                              value={item.description}
                              onChange={(event) =>
                                handleInputChange(event, index)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="Qty"
                              value={item.Qty < 0 ? (item.Qty = 0) : item.Qty}
                              onChange={(event) =>
                                handleInputChange(event, index)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="unitPrice"
                              value={
                                item.unitPrice < 0
                                  ? (item.unitPrice = 0)
                                  : item.unitPrice
                              }
                              onChange={(event) =>
                                handleInputChange(event, index)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="total"
                              disabled
                              readOnly
                              value={item.Qty * item.unitPrice}
                            />
                          </td>
                        </tr>
                      ))}
                      {itemsInvoice.length > 0 ? (
                        <tr>
                          <td colSpan={4}>Total Amount</td>
                          <td>{getTotal()}</td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </tbody>
                  </table>
                  <button type="submit" className="btn btn-secondary">
                    Add Details
                  </button>
                </div>
              </form>
              <hr />
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary" onClick={addNewItem}>
                  Add New Item
                </button>
                <button className="btn btn-danger" onClick={handleDeleteAll}>
                  Delete All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceList;
