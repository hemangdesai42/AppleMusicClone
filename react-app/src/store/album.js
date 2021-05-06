const ALL_ALBUMS = "ALL_ALBUMS";

const getAlbums = (data) => ({
    type: ALL_ALBUMS,
    payload: data
})

export const albumsData = () => async (dispatch) => {
    const res = await fetch('/api/albums');
    const data = await res.json();
    if (res.ok) {
        await dispatch(getAlbums(data))
    }
}

const intialState = {
    albumDict: {
        id: '',
        name: '',
        userId: '',
        artistId: '',
        releaseDate: '',
        order: '',
        imageUrl: '',
    },
}

export default function albumsReducer(state = intialState, action) {
    switch (action.type) {
        case ALL_ALBUMS:
            const newState = { ...action.payload }
            return newState
        default:
            return state;
    }
};
