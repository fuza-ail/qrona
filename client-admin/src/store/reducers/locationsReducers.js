const initialState = {
    locations: [{ "id": "201", "name": "mcdonald", "type": "restaurant", "address": "1 elmer st.", "phone": "123456", },
    { "id": "202", "name": "lehopital", "type": "hospital", "address": "2 elmer st.", "phone": "123456" },
    { "id": "203", "name": "gojek", "type": "transport", "address": "3 elmer st.", "phone": "123456" }
    ]
}

export default function usersReducers(state = initialState, action) {
    switch (action.type) {
        // case "SET_USERS":
        //     return { ...state, users: action.payload, }
        default:
            return state
    }
}