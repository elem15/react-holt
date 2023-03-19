const fetchPetsList = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!apiRes.ok) {
    throw new Error(`pets fetch is not ok`);
  }
  return apiRes.json();
};

export default fetchPetsList;
