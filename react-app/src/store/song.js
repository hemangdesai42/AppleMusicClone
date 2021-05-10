const ALL_SONGS = "ALL_SONGS";

const getSongs = (data) => ({
    type: ALL_SONGS,
    payload: data
})

export const songsData = () => async (dispatch) => {
    const res = await fetch('/api/songs');
    const data = await res.json();
    if (res.ok) {
        await dispatch(getSongs(data))
    }
}

const intialState = {
    songDict: {
        id: '',
        name: '',
        songItself: '',
        userId: '',
        artistId: '',
        albumId: '',
        releaseDate: '',
        songLength: '',
    },
}

export default function songsReducer(state = intialState, action) {
    switch (action.type) {
        case ALL_SONGS:
            const newState = { ...action.payload }
            return newState
        default:
            return state;
    }
};
