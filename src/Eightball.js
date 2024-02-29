import React, { useState } from "react";
import "./Eightball.css";

const EightBall = (props) => {
    const { answers } = props;
    const [msg, setMsg] = useState("8");
    const [color, setColor] = useState("black");
  
    const handleClick = () => {
      const randomAnswer = choice(answers);
      setMsg(randomAnswer.msg);
      setColor(randomAnswer.color);
    };
  
    const choice = (arr) => {
      const randomIdx = Math.floor(Math.random() * arr.length);
      return arr[randomIdx];
    };
  
    const handleReset = () => {
      setMsg("8");
      setColor("black");
      window.location.reload(); 
    };
  
    return (
      <div>
        {/* <h1>What is your question?</h1>
        <h2>Click on the 8 ball</h2> */}
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
        <b>{msg}</b>
        <button className="ResetButton" onClick={handleReset}>Reset</button>
      </div>
      </div>
    );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is highly likely.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes, absolutely.", color: "green" },
    { msg: "You can count on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook is good.", color: "green" },
    { msg: "Yes, indeed.", color: "green" },
    { msg: "Signs point to yes.", color: "orange" },
    { msg: "Reply hazy, try again.", color: "orange" },
    { msg: "Ask again later.", color: "orange" },
    { msg: "Better not tell you now.", color: "orange" },
    { msg: "Cannot predict now.", color: "orange" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "Absolutely not.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ],
};

export default EightBall;
