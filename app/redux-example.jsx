var redux = require('redux');
console.log('starting redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

var action = {
    type: 'CHANGE_NAME',
    name: 'Mayank'
};

store.dispatch(action);
console.log('changed state', store.getState());
