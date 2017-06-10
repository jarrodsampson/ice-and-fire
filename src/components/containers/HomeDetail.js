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
    }

    render() {
        return (
            <div className="App">

                <div>
                    <House {...this.props.house} goBack={APIService.goBack} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        house: store.api.house
    };
};

export default connect(mapStateToProps)(HomeDetail);