import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import commonReducer from "./reducer"
import thunkMiddleware from "redux-thunk"
import createHistory from "history/createHashHistory"
import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createHistory()

const rootReducer = combineReducers({
    core: commonReducer,
})

const middlewares = []
middlewares.push(thunkMiddleware)
middlewares.push(routerMiddleware(history))

if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger())
}

let composeEnhancers = compose
if (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(connectRouter(history)(rootReducer), composeEnhancers(applyMiddleware(...middlewares)))

export { store, history }
