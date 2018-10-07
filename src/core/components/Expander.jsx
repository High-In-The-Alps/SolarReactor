import React, { Fragment, PureComponent } from "react"

class Expander extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    handleClick = e => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { open } = this.state
        const { children } = this.props
        return <Fragment>{open ? children : <a onClick={this.handleClick}>Open</a>}</Fragment>
    }
}

export default Expander
