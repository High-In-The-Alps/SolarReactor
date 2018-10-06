import React, {Fragment, PureComponent} from 'react';

class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick = e => {
        this.setState({ open: !this.state.open})
    }

    render() {
        const { open } = this.state
        return (
            <Fragment>
                {open ? <div>Menu</div> : <a onClick={this.handleClick}>Open Menu</a>}
            </Fragment>
        )
    }
}

export default Header
