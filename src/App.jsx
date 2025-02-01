import "./App.css";
import { useState } from "react";

// function App() {
//   // let age = 0;
//   // const addOne = () => {
//   //   age = age + 1;
//   //   console.log(age);
//   // };

//   const [age, setAge] = useState(0);
//   const addOne = () => {
//     setAge(age + 1);
//   };
//   return (
//     <>
//       <div className="App">
//         <h1>Age : {age}</h1>
//         <button onClick={addOne}>Increase Age</button>
//       </div>
//     </>
//   );
// }

// function App() {
//   const [inputValue, SetInpValue] = useState("");
//   const handleInpChange = (e) => {
//     SetInpValue(e.target.value);
//   };
//   return (
//     <>
//       <div className="App">
//         <h2>Type Anything</h2>
//         <input type="text" onChange={handleInpChange} />
//         <h1>{inputValue}</h1>
//       </div>
//     </>
//   );
// }
function App() {
  const [isVisible, setVisibility] = useState("True");
  const changeVisibility = () => {
    setVisibility(!isVisible);
  };
  return (
    <>
      <div className="App">
        <button onClick={changeVisibility}>Show / Hide</button>
        {isVisible && <h1>Hello My Name is Himanshu Kumar</h1>}
      </div>
    </>
  );
}

export default App;
