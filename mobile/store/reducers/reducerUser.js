const initialValue = {
  access_token: "token",
  notificationToken: "",
  user: {},
};

function reducerUser(state = initialValue, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, access_token: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "PUT_USER":
      return { ...state, user: action.payload };
    case "SET_NOTIF_TOKEN":
      return { ...state, notificationToken: action.payload };
    default:
      return state;
  }
}

export default reducerUser;
