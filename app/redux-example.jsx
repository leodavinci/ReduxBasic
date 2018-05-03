var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('currentState', store.getState());
    if(state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if(state.map.url) {
        document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View your location</a>';
    }
});

console.log('currentState', store.getState());

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Mayank'));

// unsubscribe();

store.dispatch(actions.changeName('Richa'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Delhi 6', 'Drama'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.removeMovie(2));
