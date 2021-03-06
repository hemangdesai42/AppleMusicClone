import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import session from './session'
import home from './home'
import albumsReducer from './album'
import artistsReducer from './artist'
import songsReducer from './song'
import playlistsReducer from './playlist'
import playlistReducer from './onePlaylist'
import albumReducer from './oneAlbum'
import player from './player'
import addSongReducer from './addPlaylistsong'

const rootReducer = combineReducers({
    session,
    home,
    albumsReducer,
    albumReducer,
    artistsReducer,
    songsReducer,
    playlistsReducer,
    playlistReducer,
    player,
    addSongReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
