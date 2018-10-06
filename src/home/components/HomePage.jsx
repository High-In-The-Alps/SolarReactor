import React, {Fragment} from "react"
import { connect } from "react-redux"
import Layout from "../../core/components/Layout";
import {getAllEarthquakes, getSolarEnergeticParticles} from "../../core/actions";
import Loading from "../../core/components/Loading";
import Expander from "../../core/components/Expander";
import Header from "../../core/components/Header";

class HomePage extends React.Component {
    componentWillMount() {
        this.props.getSolarEnergeticParticles()
        this.props.getAllEarthquakes()
    }
    render() {
        const { sep } = this.props
        return <Layout>{sep && sep.length > 0 ?
        <Fragment>
            <Header/>
            <Expander>
                {sep.map((s, i) => <div key={i}>{s.sepID}</div>)}
            </Expander>
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
        getSolarEnergeticParticles: () => dispatch(getSolarEnergeticParticles()),
        getAllEarthquakes: () => dispatch(getAllEarthquakes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
