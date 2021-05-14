const ONE_ALBUM = "ONE_ALBUM";

const getAlbum = (info) => ({
    type: ONE_ALBUM,
    payload: info
})

export const albumData = (id) => async (dispatch) => {
    const res = await fetch(`/api/albums/${id}`);
    const albumData = await res.json();
    if (res.ok) {
        console.log(albumData)
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
