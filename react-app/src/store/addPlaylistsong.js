const ADD_SONG = "ADD_SONG";


const addPlaylistsong = (data) => ({
    type: ADD_SONG,
    payload: data
})


export const addSong = (playlist_id, song_id) => async (dispatch) => {
    console.log(playlist_id, song_id)
    const res = await fetch(`/api/playlists/${playlist_id}/song/${song_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            playlist_id,
            song_id
        }),
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(addPlaylistsong(data));
    return {}
}


const initialState = { 
    playlist_id: '',
    song_id: ''
}

export default function addSongReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SONG:
            const newState = { data: action.payload }
            return newState;
        default:
            return state;
    }
}