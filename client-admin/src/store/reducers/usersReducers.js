const initialState = {
    users: [
        //     { "no_ktp": "12345671", "name": "el", "email": "el@email.com", "address": "1 elmer st.", "status": "negative", 'phone': "6789998212", "id": 100 },
        // { "no_ktp": "12345672", "name": "el2", "email": "el2@email.com", "address": "2 elmer st.", "status": "negative", 'phone': "6789998212", "id": 101 },
        // { "no_ktp": "12345673", "name": "el3", "email": "el3@email.com", "address": "3 elmer st.", "status": "negative", 'phone': "6789998212", "id": 102 }
    ]
}

export default function usersReducers(state = initialState, action) {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.payload, }
        default:
            return state
    }
}