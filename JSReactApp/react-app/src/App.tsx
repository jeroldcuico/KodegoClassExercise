import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let items = ["Jerold", "Angel", "Jean", "Jerdyce", "Duke"];

  const handSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertShow, setAlertShow] = useState(false);
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handSelectItem} />
      {alertShow && (
        <Alert onClose={() => setAlertShow(false)}>Hello World</Alert>
      )}
      <Button children="My Button Jerold" onClick={() => setAlertShow(true)} />
    </div>
  );
}

export default App;
