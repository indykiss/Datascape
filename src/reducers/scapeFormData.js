
const initialState = {
    stock: '',
    start_date: '',
    end_date: ''
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_SCAPE':
            return action.scapeFormData;

        case 'RESTART_SCAPE':
            return initialState;

    default:
        return state;
    }
}