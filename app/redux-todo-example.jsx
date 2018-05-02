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
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
// subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('search text is ', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'mayanka'
});
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'sexy'
});
