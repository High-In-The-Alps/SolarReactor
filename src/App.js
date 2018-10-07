import React, { Component } from "react"
import "./App.css"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { Route, Switch } from "react-router-dom"
import { store, history } from "./core/store"
import HomePage from "./home/components/HomePage"
import AboutPage from "./about/components/AboutPage"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
