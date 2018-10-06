import axios from "axios"

const apiKey="aqz2RaowVgKLzohNCG1nOlwTw2Sbjg3mRd7tfyIU"

export const GET_SOLAR_ENERGETIC_PARTICLES = "core/getSolarEnergeticParticles"
export const GET_ALL_EARTHQUAKES = "core/getAllEarthquakes"

export const getSolarEnergeticParticles = () => dispatch => {
    axios.get("https://api.nasa.gov/DONKI/SEP?startDate=2017-01-01&endDate=2018-01-01&api_key=" + apiKey)
        .then(response => dispatch({ type: GET_SOLAR_ENERGETIC_PARTICLES, sep: response }))
        .catch(error => console.warn(error))
}

export const getAllEarthquakes = () => dispatch => {
    axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson")
        .then(response => dispatch({ type: GET_ALL_EARTHQUAKES, quakes: response }))
        .catch(error => console.warn(error))
}
