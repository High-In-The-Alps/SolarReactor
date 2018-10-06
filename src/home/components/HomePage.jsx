import React, {Fragment} from "react"
import { connect } from "react-redux"
import Layout from "../../common/Layout";
import {getSolarEnergeticParticles} from "../../core/actions";
import Loading from "../../common/Loading";

class HomePage extends React.Component {
    componentWillMount() {
        this.props.getSolarEnergeticParticles()
    }
    render() {
        const { sep } = this.props
        return <Layout>{sep && sep.length > 0 ?
        <Fragment>
            {sep.map((s, i) => <div key={i}>{s.sepID}</div>)}
        </Fragment> : <Loading />}
        </Layout>
    }
}

const mapStateToProps = state => {
    return {
        sep: state.core.sep
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSolarEnergeticParticles: () => dispatch(getSolarEnergeticParticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
