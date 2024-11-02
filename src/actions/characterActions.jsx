export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CHARACTERS_REQUEST" });
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch({ type: "FETCH_CHARACTERS_SUCCESS", payload: data.results });
    } catch (error) {
      dispatch({ type: "FETCH_CHARACTERS_FAILURE", payload: error.message });
    }
  };
};

export const clearCharacters = () => {
  return { type: "CLEAR_CHARACTERS" };
};

export default fetchCharacters;
