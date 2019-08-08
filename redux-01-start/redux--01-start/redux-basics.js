const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0,
    name: 'pallabi'
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
            name: state.name + 'das'
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
            name: state.name + 'das'
        }
    }
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscribtion]', store.getState())
})

//Dispatch Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());