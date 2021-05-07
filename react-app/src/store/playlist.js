const ALL_PLAYLISTS = "ALL_PLAYLISTS";

const getPlaylists = (data) => ({
    type: ALL_PLAYLISTS,
    payload: data
})

export const playlistsData = () => async (dispatch) => {
    const res = await fetch('/api/playlists');
    const data = await res.json();
    if (res.ok) {
        await dispatch(getPlaylists(data))
    }
}

const intialState = {
    playlistDict: {
        id: '',
        name: '',
        userId: '',
        order: '',
        imageUrl: '',
    },
}

export default function playlistsReducer(state = intialState, action) {
    switch (action.type) {
        case ALL_PLAYLISTS:
            const newState = { ...action.payload }
            return newState
        default:
            return state;
    }
};
