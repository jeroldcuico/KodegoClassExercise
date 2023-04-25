import "bootstrap/dist/css/bootstrap.min.css";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContentArea, Footer, Header } from "./containers";

const staffs = [
  {
    name: "Oliver Queen",
    title: "CEO",
    gender: "male",
    age: 38,
    languages: "english",
  },
  {
    name: "Ben Hur",
    title: "Security consultant",
    gender: "male",
    age: 25,
    languages: ["latin", "english"],
  },
  {
    name: "Jessica Alba",
    title: "Admin Assistant",
    gender: "female",
    age: 23,
    languages: "english",
  },
  {
    name: "Pepper Piper",
    title: "Quality Assurance",
    gender: "female",
    age: 32,
    languages: "spanish",
  },
  {
    name: "Red Sullivan",
    title: "Project Manager",
    gender: "male",
    age: 27,
    languages: "russian",
  },
  {
    name: "Juan Dela Cruz",
    title: "Manager",
    age: 24,
    gender: "male",
    languages: "russian",
  },
  {
    name: "Anna Salvador",
    title: "Junior Dev",
    age: 21,
    gender: "female",
    languages: "english",
  },
  {
    name: "Mark Bautista",
    title: "Senior Fullstack Dev",
    age: 28,
    gender: "male",
    languages: "russian",
  },
  {
    name: "Micheal Garcia",
    title: "CEO",
    age: 40,
    gender: "male",
    languages: "english",
  },
];

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



function App() {
  return (
    <>
      <div className="d-flex w-100 h-100 flex-column">
        <Header />
        <ContentArea
          invoice={invoice}
          invoiceItems={invoiceItems}
          data={staffs}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
