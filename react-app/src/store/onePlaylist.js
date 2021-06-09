const ONE_PLAYLIST = "ONE_PLAYLIST"

const getPlaylist = (info) => ({
    type: ONE_PLAYLIST,
    payload: info
})

export const playlistData = (id) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${id}`);
    const playlistData = await res.json();
    if (res.ok) {
        await dispatch(getPlaylist(playlistData))
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

export default function playlistReducer(state = intialState, action) {
    switch (action.type) {
        case ONE_PLAYLIST:
            const newState = { ...action.payload }
            return newState;
        default:
            return state;
    }
};