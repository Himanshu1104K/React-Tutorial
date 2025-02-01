import "./App.css";
// Lists in React

// Example 1
// function App() {
//   const names = ["himanshu", "honey", "jon", "Singham", "Don"];

//   return (
//     <>
//       <div className="App">
//         {names.map((name, key) => {
//           return <h1 key={key}>{name}</h1>;
//         })}
//       </div>
//     </>
//   );
// }

// Example 2
function App() {
  const users = [
    { name: "Himanshu", age: 21 },
    { name: "Honey", age: 24 },
    { name: "Jon", age: 19 },
  ];

  return (
    <>
      <div className="App">
        {users.map((user, key) => {
          return (
            <div key={key}>
              <h1>{user.name}</h1>
              <h1>{user.age}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
