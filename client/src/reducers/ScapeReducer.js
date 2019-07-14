
// Fix this somehow?

export default function ScapeReducer(state = {scapes: [], scape: {} }, action) {
    switch (action.type) {
        case "FETCH_SCAPES":
            console.log("loading scapes reducer")
            return {
                ...state, scapes: action.payload
            }
        case "FETCH_SCAPE":
        console.log("fetch scapes reducer")
            return {
                ...state,
                scape: action.payload
            }
        case "ADD_SCAPE":
        console.log("fetch scapes reducer")
            return {
                ...state,
                scape: action.payload
            }

        default:
            return state
    }
}