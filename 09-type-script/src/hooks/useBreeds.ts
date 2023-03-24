import { useQuery, QueryStatus } from "@tanstack/react-query";
import fetchBreeds from "../queries/fetchBreeds";
import { Animal } from "../types/APIResponses";

const useBreeds = (animal: Animal) => {
  const results = useQuery(["breeds", animal], fetchBreeds);
  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
};

export default useBreeds;
