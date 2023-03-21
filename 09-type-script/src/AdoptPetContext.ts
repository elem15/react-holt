import { createContext } from "react";
import { Pet } from "./types/APIResponses";

const AdoptPetContext = createContext<[Pet | null, (pet: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptPetContext;
