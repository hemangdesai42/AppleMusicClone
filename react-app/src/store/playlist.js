const ALL_PLAYLISTS = "ALL_PLAYLISTS";

const ALL_PLAYLISTSONGS = "ALL_PLAYLISTSONGS";


const getPlaylists = (data) => ({
    type: ALL_PLAYLISTS,
    payload: data
})

const allPlaylistsongs = (data) => ({
    type: ALL_PLAYLISTSONGS,
    payload: data
})

export const playlistsData = () => async (dispatch) => {
    const res = await fetch('/api/playlists');
    const data = await res.json();
    if (res.ok) {
        await dispatch(getPlaylists(data))
    }
}

export const playlistsSongs = (playlistId) => async (dispatch) => {
    const res = await fetch(`/${playlistId}/songs/`);
    const data = await res.json();
    if (res.ok) {
        await dispatch(allPlaylistsongs(data))
    }
}

export const createPlaylists = (userId, playlistId, playlistName, imageUrl) => async (dispatch) => {
    const res = await fetch('/api/playlists/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId,
            playlistId, 
            playlistName, 
            imageUrl
        }),
    });
    const data = await res.json()
}

export const addSongs = (playlistId, songId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}/song/${songId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            playlistId, 
            songId
        }),
    });
    const data = await res.json()
}

export const deleteSongs = (playlistId, songId) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${playlistId}/song/${songId}`, {
        method: "DELETE",
        playlistId, 
        songId
    })
    const data = await res.json()
    return "deleted"
}

export const deletePlaylists = (id) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${id}/delete`, {
        method: "DELETE",
        id
    })
    const data = await res.json()
    return "deleted"
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
            return newState;
        case ALL_PLAYLISTSONGS:
            const newStates = { ...action.payload }
            return newStates;
        default:
            return state;
    }
};
