

const initialState = {
    properties: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_AGENT_STATE':
        return { ...state, ...payload }

    default:
        return state
    }
}
