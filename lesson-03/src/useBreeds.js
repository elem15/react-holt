import { useEffect, useState } from "react";

const localCash = {};
const useBreeds = (animal) => {
  const [currentBreeds, setCurrentBreeds] = useState([]);
  const [loadState, setLoadState] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setCurrentBreeds([]);
    } else if (localCash[animal]) {
      setCurrentBreeds(localCash[animal]);
    } else {
      loadBreeds();
    }
    async function loadBreeds() {
      setLoadState("loading");
      setCurrentBreeds([]);
      const res = await fetch(
        "http://pets-v2.dev-apis.com/breeds?animal=" + animal
      );
      const json = await res.json();
      localCash[animal] = json.breeds || [];
      setCurrentBreeds(localCash[animal]);
      setLoadState("load");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animal]);
  return [currentBreeds, loadState];
};

export default useBreeds;
