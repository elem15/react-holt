import { QueryStatus } from "@tanstack/react-query";
import { useGetBreedsQuery } from "../redux/petApiService";
import { Animal } from "../types/APIResponses";

const useBreeds = (animal: Animal) => {
  const { isLoading, data: breeds } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) return [[], "error"] as [string[], QueryStatus];

  return [breeds ?? [], isLoading ? "loading" : "success"] as [
    string[],
    QueryStatus
  ];
};

export default useBreeds;
