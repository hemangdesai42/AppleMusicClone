const ALL_ARTISTS = "ALL_ARTISTS";

const getArtists = (data) => ({
    type: ALL_ARTISTS,
    payload: data
})

export const artistsData = () => async (dispatch) => {
    const res = await fetch('/api/artists');
    const data = await res.json();
    if (res.ok) {
        await dispatch(getArtists(data))
    }
}

const intialState = {
    artistDict: {
        id: '',
        name: '',
        bio: '',
        imageUrl: '',
        userId: '',
    },
}

export default function artistsReducer(state = intialState, action) {
    switch (action.type) {
        case ALL_ARTISTS:
            const newState = { ...action.payload }
            return newState
        default:
            return state;
    }
};
