import "./App.css";
import { Person } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        friends={[1, "shivam", "Anushikha", "Shreya"]} // this will give us error on the console.
        name="Himanshu"
        email="himanshu@gmail.com"
        age={20}
        isMarried={false}
      />
    </div>
  );
}

export default App;
