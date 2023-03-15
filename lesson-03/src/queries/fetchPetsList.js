const fetchPetsList = async ({ queryKey }) => {
  const [name, animal, location, breed] = queryKey;
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!apiRes.ok) {
    throw new Error(`pets fetch is not ok`);
  }
  return apiRes.json();
};

export default fetchPetsList;