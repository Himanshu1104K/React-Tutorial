import "./App.css";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// Example 1
// function App() {
//   // fetch("https://catfact.ninja/fact")
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //   });

//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   };

//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   return (
//     <>
//       <div className="App">
//         <button onClick={fetchCatFact} className="btn">
//           Generate Cat Fact
//         </button>
//         <p>{catFact}</p>
//       </div>
//     </>
//   );
// }

// Example 2
function App() {
  const api = "https://api.agify.io/?name=";

  const [name, setName] = useState("");
  const [Age, setAge] = useState({});
  const [inputDone, setInpDone] = useState(false);

  const getName = (e) => {
    setName(e.target.value);
  };

  const getAge = () => {
    if (name !== "") {
      Axios.get(`${api}${name}`).then((res) => {
        setAge(res.data);
      });
    }
    setInpDone(!inputDone);
  };

  return (
    <div className="App">
      {!inputDone && (
        <input
          type="text"
          className="inp"
          onChange={getName}
          placeholder="Enter Name"
        />
      )}
      <button onClick={getAge} className="btn">
        Predict Age
      </button>
      {inputDone && (
        <div>
          <h1>Name : {Age?.name}</h1>
          <h1>Predicted Age : {Age?.age}</h1>
          <h1>Count : {Age?.count}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
