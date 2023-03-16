import { useState } from "react";

interface Props {
  children: string;
  color?: "primary"; //optinal chaining
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Notifications <span className="badge text-bg-secondary">{count}</span>
      </button>
      
    </>
  );
};

export default Button;
