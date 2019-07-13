
export default function ScapeReducer(state = { loading: false, scapes: [] }, action) {
    switch (action.type) {
        case "LOADING_SCAPES":

            return {
                ...state,
                loading: true,
            }
        case "FETCH_SCAPES":

            return {
                ...state,
                loading: false,
                scapes: action.payload
            }

        default:
            return state
    }
}