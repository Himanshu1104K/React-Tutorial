import "./App.css";

function App() {
  // const name = "Himanshu";

  const name = <h1>Hello my name is Himanshu</h1>;
  return (
    <>
      {/* <div>
        <h1>Hello World.</h1>
      </div> */}

      {/* <div>
        <h1>Hello my name is {name}</h1>
      </div> */}

      {/* {name}
      {name} */}
    </>
  );
}

const GetName = () => {
  return "Himanshu Kumar";
};

const GetNameComponent = () => {
  return <h1>Himanshu Kumar</h1>;
};

export default App;
