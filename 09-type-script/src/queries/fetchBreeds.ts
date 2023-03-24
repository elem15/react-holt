import { QueryFunction } from "@tanstack/react-query";
import { Animal, BreedListAPIResponse } from "../types/APIResponses";

const fetchBreeds: QueryFunction<
  BreedListAPIResponse,
  ["breeds", Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];
  const apiRes = await fetch(
    "http://pets-v2.dev-apis.com/breeds?animal=" + animal
  );
  if (!apiRes.ok) {
    throw new Error(`breeds fetch is not ok`);
  }
  return apiRes.json();
};

export default fetchBreeds;
