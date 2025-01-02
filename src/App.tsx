import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import Description from "./Description";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = (value: number) => {
    setCount((count) => count + value);
  };

  const handleText = (value: string) => {
    setText(value);
  };

  return (
    <>
      <Header />
      <div className="card">
        <div style={{ color: "green", fontSize: "20px", fontWeight: 700 }}>
          Hello: {text}
        </div>
        <Button onClickProps={() => handleText('John')}>
          Change text to Hello John
        </Button>
        <Button onClickProps={() => handleText("Jane")}>
          Change text to Hello Jane
        </Button>
        <Button onClickProps={() => handleClick(1)}>
          <div style={{ color: "red" }}>Count is {count}</div>
        </Button>
        <Button onClickProps={() => handleClick(-1)}>
          Decrement by 1: Count is {count}
        </Button>
        <Button onClickProps={() => handleClick(10)}>
          Increment by 10: Count is {count}
        </Button>
        <Button onClickProps={() => handleClick(-10)}>
          Decrement by 10: Count is {count}
        </Button>
      </div>
      <Description />
      <Footer />
    </>
  );
}

export default App;
