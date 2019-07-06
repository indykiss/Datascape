

export default function scapeFormReducer(state= { scapes: []}, action) {

    switch(action.type) {
        case 'ADD_SCAPE':
            return action.ScapeForm;

    default:
        return state;
    }
}


