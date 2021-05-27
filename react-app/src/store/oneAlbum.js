const ONE_ALBUM = "ONE_ALBUM";

const getAlbum = (info) => ({
    type: ONE_ALBUM,
    payload: info
})

export const albumData = (id) => async (dispatch) => {
    const res = await fetch(`/api/albums/${id}`);
    const albumData = await res.json();
    if (res.ok) {
        await dispatch(getAlbum(albumData))
    }
}

const intialState = {
    albumDict: {
        id: '',
        name: '',
        userId: '',
        artistId: '',
        imageUrl: '',
    },
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
    artistDict: {
            id: '',
            name: '',
            bio: '',
            imageUrl: '',
            userId: '',
        },
}


export default function albumReducer(state = intialState, action) {
    switch (action.type) {
        case ONE_ALBUM:
            const newState = { ...action.payload }
            return newState
        default:
            return state;
    }
};
