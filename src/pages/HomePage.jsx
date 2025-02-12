import { useQuery } from "@tanstack/react-query";
import React from "react";
import Axios from "axios";
export const HomePage = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });

  if (isError) {
    return <h1>Error fetching data</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>This is the Home Page</h1>
      {<h1>Fact : {catData?.fact}</h1>}
      <button onClick={refetch}>Update Data</button>
    </div>
  );
};
