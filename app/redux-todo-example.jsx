var redux = require('redux');
console.log('starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};
var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'mayanka'
};
store.dispatch(action);
console.log('currentState', store.getState());
