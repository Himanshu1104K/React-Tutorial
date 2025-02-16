// import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  India = "India",
  USA = "USA",
  Japan = "Japan",
}
export const Person = (props: Props) => {
  // how to define datatype of useState.
  // const [name, setName] = useState<string>();

  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h1>Email : {props.email}</h1>
      <h1>Age : {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} Married</h1>

      {props.friends.map((friend: string) => {
        return <h1>{friend}</h1>;
      })}

      <h1>Person is Born in : {props.country}</h1>
    </div>
  );
};
