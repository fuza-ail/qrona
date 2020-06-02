import axios from "axios";
const mainUrl = "http://localhost:3000";

export function login(userData) {
  console.log(userData);
  // return (dispatch, setState) => {
  //   axios({
  //     url: `${mainUrl}/login`,
  //     method: "POST",
  //     data: userData,
  //   })
  //     .then((data) => {
  //       console.log(data);
  //       dispatch({ type: "SET_TOKEN", payload: data.access_token });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
}

export function register(userData) {
  console.log(userData);
  // return (dispatch, setState) => {
  //   axios({
  //     url: `${mainUrl}/register`,
  //     method: "POST",
  //     data: userData,
  //   })
  //     .then((data) => {
  //       console.log(data);
  //       dispatch({ type: "SET_TOKEN", payload: data.access_token });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
}
