import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const useGetCat = () => {
  const {
    data: CatData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
    enabled: false,
  });

  const refetchData = () => {
    refetch();
    alert("Data Refetched!");
  };

  return { CatData, isLoading, refetchData };
};
