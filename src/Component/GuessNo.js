import React, { useRef, useState } from "react";
import "./style.css";
import Reactcan from "react-confetti";
const randomm = Math.floor(Math.random() * 51);
const colors = [
  "rgba(192, 66, 66, 0.708)",
  "rgba(84, 122, 84, 0.897)",
  " rgba(84, 84, 220, 0.553)",
];

var congos = false;
var count = 0;
var set = "";
const GuessNo = () => {
  const [num, setNum] = useState("");
  const [up, setUp] = useState();
  const [message, setmessage] = useState("");
  const [name, setName] = useState("Enter the number");
  const [bg, setBg] = useState("");
  // const [set, setSet] = useState("");
  const refElem = useRef();
  // console.log(refElem);

  const handleonchange = e => {
    setNum(e.target.value);
  };
  const handleGo = () => {
    // setSet("");
    isNaN(parseInt(num)) ? (count += 0) : count++;
    setUp(parseInt(num));

    if (
      Math.abs(parseInt(num) - randomm) < 5 &&
      Math.abs(parseInt(num) - randomm) > 0
    ) {
      // console.log(Math.abs(parseInt(num) - randomm));
      setBg(colors[2]);
      setmessage("you are more closure!! 😃");
      refElem.current.style.color = "blue";
    } else if (Math.abs(parseInt(num) - randomm) > 50) {
      refElem.current.style.color = "red";
      setBg(colors[0]);
      setmessage("no is far!! 😢");
    } else if (
      Math.abs(parseInt(num) - randomm) > 5 &&
      Math.abs(parseInt(num) - randomm) < 10
    ) {
      setBg(colors[1]);
      setmessage("number is nearer 😃");
      refElem.current.style.color = "green";
    } else if (Math.abs(parseInt(num) - randomm) === 0) {
      setmessage("congrats 🎊");
      setBg("white");

      refElem.current.style.color = "rebeccapurple";
      congos = true;
    }
    setNum("");
    setName("try add new value");
    console.log(randomm);
  };

  // useEffect(()=>{
  // setSet("welcome to the game.best of luck !! 👍");
  // },[])
  // const congrats=()=>{}
  return (
    <>
      {congos === true ? <Reactcan numberOfPieces={300} /> : " "}

      <div className="main">
        {set !== "" ? (
          // setSet("welcome to the game.best of luck !! 👍")
          ""
        ) : (
          <>
            {/* {set} */}
            <div className="msg" style={{ background: bg }}>
              <h1 ref={refElem}>{message}</h1>
            </div>
            <div className="update">
              <h1>{up}</h1>
            </div>
            <div className="steps">
              {congos === true ? (
                <span>{`you made it in ${count} steps`}</span>
              ) : (
                ""
              )}
            </div>
            <div className="inp">
              <input
                type="text"
                id="num"
                name="num"
                value={num}
                placeholder={name}
                onChange={handleonchange}></input>
              <button onClick={handleGo}>
                go
                <span style={{ marginLeft: "1rem", fontSize: "2rem" }}>
                  {" "}
                  {">"}
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GuessNo;
