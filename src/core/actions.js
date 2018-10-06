import axios from "axios"

const apiKey="aqz2RaowVgKLzohNCG1nOlwTw2Sbjg3mRd7tfyIU"

export const GET_SOLAR_ENERGETIC_PARTICLES = "core/getSolarEnergeticParticles"

export const getSolarEnergeticParticles = () => dispatch => {
    axios.get("https://api.nasa.gov/DONKI/SEP?startDate=2017-01-01&endDate=2018-01-01&api_key=" + apiKey)
        .then(response => dispatch({ type: GET_SOLAR_ENERGETIC_PARTICLES, sep: response }))
        .catch(error => console.warn(error))
}
