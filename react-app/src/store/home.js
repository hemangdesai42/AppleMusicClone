const ALL_DATA = "ALL_DATA";

const getData = (data) => ({
    type: ALL_DATA,
    payload: data
})

export const homeData = () => async (dispatch) => {
    const res = await fetch('/api/home');
    const data = await res.json();
    if (res.ok) {
        await dispatch(getData(data))
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
    // songDict: {
        
    // },
    // playlistDict: {

    // },
    // artistDict: {

    // }
}

export default function homeReducer(state = intialState, action) {
    switch (action.type) {
        case ALL_DATA:
            const newState = { ...action.payload }
            return newState
        default:
            return state;
    }
};
