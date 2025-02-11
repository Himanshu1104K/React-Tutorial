import { useQuery } from "@tanstack/react-query";
import React from "react";
import Axios from "axios";
export const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });
  return (
    <div>
      <h1>This is the Home Page</h1>
      {<h1>Fact : {data?.fact}</h1>}
    </div>
  );
};
