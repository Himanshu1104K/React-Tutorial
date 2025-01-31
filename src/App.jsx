import "./App.css";

function App() {
  return (
    <>
      <User
        name="Himanshu Kumar"
        age={21}
        email="kumarHimanshu1104K@gmail.com"
      />
      <User name="Honey Kumar" age={25} email="honey@gmail.com" />
      <User name="Jay Singh" age={20} email="Jay@gmail.com" />
    </>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
