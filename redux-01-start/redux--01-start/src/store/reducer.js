const initialState = {
    counter: 1
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'INCREMENT_BY_5':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'DECREMENT_BY_5':
            return {
                ...state,
                counter: state.counter - action.value
            }

    }
    return state;
}
export default rootReducer;