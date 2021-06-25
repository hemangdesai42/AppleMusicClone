const ADD_SONG = "ADD_SONG";


const addPlaylistsong = (playlistId, songId) => ({
    type: ADD_SONG,
    payload: playlistId, songId
})


export const addSong = (playlistId, songId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}/song/${songId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            playlistId,
            songId
        }),
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    return dispatch(addPlaylistsong(data));
}


const initialState = { 
    addSongs: {
        playlistId: '',
        songId: ''
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG:
        default:
            return state;
    }
}