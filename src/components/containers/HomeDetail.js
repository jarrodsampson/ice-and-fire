import React, { Component } from 'react';
import '../../css/HomeDetail.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';

import House from '../views/House';

class HomeDetail extends Component {

    getContent(id) {
        APIService.getHomeById(id);
    }
    componentDidMount() {
        this.getContent(this.props.match.params.id);
        this.forceUpdate();
    }

    render() {
        return (
            <div className="App">

                <div>
                    <House {...this.props} goBack={APIService.goBack} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        house: store.api.house,
        overlord: store.api.overlord,
        founder: store.api.founder,
        currentLord: store.api.currentLord,
        swornMembers: store.api.swornMembers
    };
};

export default connect(mapStateToProps)(HomeDetail);