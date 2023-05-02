import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { ContentArea, Footer, Header } from "./containers";
import { useEffect, useState } from "react";

function App() {
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

  //GetInvoice

  const [itemInvoiceInfo, setItemInvoiceInfo] = useState({});
  const [itemInvoiceInfoDetails, setItemInvoiceInfoDetails] = useState([]);
  const fetchInvoiceData = async () => {
    try {
      const response = await fetch("http://localhost:8000/invoice");
      const { invoiceInfo, invoiceItems } = await response.json();
      setItemInvoiceInfo(invoiceInfo);
      setItemInvoiceInfoDetails(invoiceItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInvoiceData();
  }, []);


  return (
    <>
      <div className="d-flex w-100 h-100 flex-column">
        <Header />
        <ContentArea
          data={staffs}
          invoice={itemInvoiceInfo}
          invoiceItems={itemInvoiceInfoDetails}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
