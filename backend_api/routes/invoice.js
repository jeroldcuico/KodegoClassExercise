var express = require("express");
var router = express.Router();

const invoice = {
  invoiceTo: "Juan Dela Cruz",
  date: "2023-04-15",
  address1: "810 Oroquieta Street Sta Cruz 1000",
  address2: "Manila, Metro Manila, Philippines",
  invoiceNumber: "6845",
  paymentMode: "COD",
};

const invoiceItems = [
  { description: "Mouse", Qty: 3, unitPrice: 200 },
  { description: "Keyboard", Qty: 3, unitPrice: 400 },
  { description: "Monitor", Qty: 6, unitPrice: 5400 },
  { description: "CPU Tower Case", Qty: 3, unitPrice: 1200 },
  { description: "Headset", Qty: 3, unitPrice: 500 },
  { description: "UPS", Qty: 1, unitPrice: 4000 },
];

router.get("/", (req, res, next) => {
  res.send({ ...invoice, ...invoiceItems });
});

router.get("/invoice", (req, res, next) => {
  res.send({ ...invoice, ...invoiceItems }.length);
});

module.exports = router;
