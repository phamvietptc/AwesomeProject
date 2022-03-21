export const EMAIL_UPDATE = "EMAIL_UPDATE";
export const ID_UPDATE = "ID_UPDATE";

const initialState = {
    email: "",
    score: 0,
    address: "",
    id: "",
}

export default function actionForReducer(state = initialState, payload) {
    switch(payload.type) {
        case "EMAIL_UPDATE":
            return {
                ...state,
                email: payload.email
            }
        case "ID_UPDATE":
            return {
                ...state,
                id: payload.id
            }
        default:
            return state
    }
}