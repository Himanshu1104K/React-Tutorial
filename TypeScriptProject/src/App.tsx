import "./App.css";
import { Person } from "./Person";
import { Country } from "./Person";
function App() {
  // Function return value defination
  // const func = (name: string): string => {
  //   return name;
  // };

  return (
    <div className="App">
      <Person
        friends={["Jatin", "shivam", "Anushikha", "Shreya"]} // this will give us error on the console.
        name="Himanshu"
        email="himanshu@gmail.com"
        age={20}
        isMarried={false}
        country={Country.Japan}
      />
    </div>
  );
}

export default App;
