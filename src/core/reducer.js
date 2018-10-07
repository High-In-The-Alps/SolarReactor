import { GET_ALL_EARTHQUAKES, GET_SOLAR_ENERGETIC_PARTICLES } from "./actions"

let initialState = {
    sep: [],
    quakes: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SOLAR_ENERGETIC_PARTICLES:
            let sep = { ...action.sep }
            if (sep.data && sep.data.length > 0) {
                return { ...state, sep: action.sep.data }
            } else {
                return state
            }
        case GET_ALL_EARTHQUAKES:
            return { ...state, quakes: action.quakes }
        default:
            return state
    }
}
