import axios from "axios";
const mainUrl = "https://vast-woodland-47918.herokuapp.com";

export function getPlaces(token) {
	return (dispatch, setState) => {
		axios({
			url: `${mainUrl}/hotplace`,
			method: "GET",
			headers: {
				access_token: token
			}
		})
			.then(res => {
				// console.log(res.data);
				dispatch({ type: "GET_PLACES", payload: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export function addDataHotPlace(token, dataHotplace) {
	return (dispatch, setState) => {
		axios({
			url: `${mainUrl}/hotplace`,
			method: "POST",
			headers: {
				access_token: token
			},
			data: dataHotplace
		})
			.then(res => {
				dispatch({ type: "POST_PLACE", payload: res.data });
			})
			.then(err => {
				console.log(err);
			});
	};
}
