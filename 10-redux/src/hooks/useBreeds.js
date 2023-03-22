import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "../queries/fetchBreeds";

const useBreeds = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreeds);
  return [results?.data?.breeds ?? [], results.status];
};

export default useBreeds;
