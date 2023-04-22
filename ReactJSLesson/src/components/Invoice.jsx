function Invoice({ invoice, invoiceItems }) {
  const { invoiceTo, date, address1, address2, invoiceNumber, paymentMode } =
    invoice;
  const padStartInvoiceNum = invoiceNumber.padStart(10, "0");

  let totalAmount = 0;
  const handleTotal = ({ Qty, unitPrice }) => {
    const total = Qty * unitPrice;
    totalAmount += total;
    return total;
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container mb-5 mt-3">
            <div className="row d-flex align-items-baseline">
              <h2 className="text-dark">
                Invoice Number:
                <strong className="invoicenum text-danger">
                  {padStartInvoiceNum}
                </strong>
              </h2>
              <hr />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <ul className="list-unstyled">
                    <li className="text-muted">
                      <strong>Invoice to: </strong>
                      <span className="customer_name">{invoiceTo}</span>
                    </li>
                    <li className="text-muted">
                      <strong>Address: </strong>
                      <span className="address">
                        {address1 + ", " + address2}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li className="text-muted">
                      <span className="fw-bold">Mode of Payment:</span>
                      <span className="mode_payment">{paymentMode}</span>
                    </li>
                    <li className="text-muted">
                      <span className="fw-bold">Invoice Date: </span>
                      <span className="invoicedate">{date}</span>
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
                      <th scope="col">Description</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.description}</td>
                        <td>{item.Qty}</td>
                        <td>{item.unitPrice}</td>
                        <td>{handleTotal(item)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={3}>Total Amount</td>
                      <td>{totalAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
