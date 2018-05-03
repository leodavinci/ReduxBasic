var redux = require('redux');
console.log('starting redux');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.movie.title,
                        genre: action.movie.genre
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
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
    console.log('Name is ', state.name);
    document.getElementById('app').innerHTML = state.name;
    console.log('currentState', store.getState());
});

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Mayank'
});

// unsubscribe();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Richa'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Delhi 6',
        genre: 'Drama'
    }
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Mad Max',
        genre: 'Action'
    }
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2
});
