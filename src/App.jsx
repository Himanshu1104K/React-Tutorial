import "./App.css";

function App() {
  // // // Ternery Operator in JS
  // let age = 19;
  // age >= 18 ? console.log("IS OVER AGE") : console.log("IS UNDER AGE");

  // return (
  //   <>
  //     <div className="App">
  //       <h1 className="name">Himanshu</h1>
  //     </div>
  //   </>
  // );

  // Method 1

  // let age = 19;
  // if (age >= 18) {
  //   return <h1 className="App">Over Age</h1>;
  // } else {
  //   return <h1 className="App">Under Age</h1>;
  // }

  // Method 2
  let age = 17;
  let isGreen = true;
  return (
    <div className="App">
      <h1 className="name">{age >= 18 ? "Over Age" : "Under Age"}</h1>
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is Color</h1>

      {isGreen && <button>This is a Button</button>}
    </div>
  );
}

export default App;
