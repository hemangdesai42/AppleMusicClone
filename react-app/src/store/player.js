const CURRENT_SONG = "CURRENT_SONG";

const QUEUE_SONG = "QUEUE_SONG";

const NEXT_SONG = "NEXT_SONG";

const PREV_SONG = "PREV_SONG";

export const currentSong = (song) => ({
    type: CURRENT_SONG,
    payload: song
})

export const addToQueue = (...songs) => ({
    type: QUEUE_SONG,
    payload: songs
})

export const nextSong = () => ({
    type: NEXT_SONG,
})

export const previousSong = () => ({
    type: PREV_SONG,
})


const intialState = {
    current: { songItself: null},
    currentTrack: 0,
    songs: []
}


export default function playerReducer(state = intialState, action) {
    switch (action.type) {
        case CURRENT_SONG:
            const newState = { ...state, current: action.payload, songs: [action.payload] }
            return newState
        case QUEUE_SONG:
            return { ...state, songs: [ ...state.songs, ...action.payload ] }
        case NEXT_SONG:
            return { 
                ...state, 
                current: state.currentTrack === state.songs.length - 1
                    ? state.songs[0]
                    : state.songs[state.currentTrack + 1],
                currentTrack: state.currentTrack === state.songs.length - 1
                    ? 0
                    : state.currentTrack + 1,
            }
        case PREV_SONG:
            return { 
                ...state, 
                current: state.currentTrack === 0
                    ? state.songs[state.songs.length - 1]
                    : state.songs[state.currentTrack - 1],
                currentTrack: state.currentTrack === 0
                    ? state.songs.length - 1
                    : state.currentTrack - 1
            }
        default:
            return state;
    }
};