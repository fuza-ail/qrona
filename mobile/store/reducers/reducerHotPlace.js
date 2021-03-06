const initialValue = {
  places: [],
  place: {},
};

function reducerHotPlace(state = initialValue, action) {
  switch (action.type) {
    case "GET_PLACES":
      return { ...state, places: action.payload };
    case "GET_PLACE":
      return { ...state, place: action.payload };
    case "POST_PLACE":
      return { ...state, places: [...state.places, action.payload] };
    default:
      return state;
  }
}

export default reducerHotPlace;
