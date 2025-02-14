import { useGetCat } from "./useGetCat";
export const Cat = () => {
  const { CatData, isLoading, refetchData } = useGetCat();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{CatData?.fact}</h1>
      <button onClick={refetchData}>Get Fact</button>
    </div>
  );
};
