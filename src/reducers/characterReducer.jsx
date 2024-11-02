const initialState = {
  characters: [],
  loading: false,
  error: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_CHARACTERS_SUCCESS":
      return { ...state, loading: false, characters: action.payload };
    case "FETCH_CHARACTERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "CLEAR_CHARACTERS":
      return { ...state, characters: [] };
    default:
      return state;
  }
};

export default characterReducer;
