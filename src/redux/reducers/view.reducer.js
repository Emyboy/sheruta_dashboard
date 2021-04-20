const initialState = {
    sideNav: false,
    notification: false,
    message: false,
    categories: [],
    amenities: [],
    status: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_VIEW_STATE':
        return { ...state, ...payload }

    default:
        return state
    }
}
