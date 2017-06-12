import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import '../../css/Homes.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';
import HomeList from '../views/HomeList';

class Homes extends Component {

    getContent() {
        APIService.getAllHouses();
    }
    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="App">

                <DocumentTitle title='Homes - Ice and Fire The Series' />

                <div>
                    <HomeList homes={this.props.homes} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        books: store.api.books,
        characters: store.api.characters,
        homes: store.api.houses
    };
};

export default connect(mapStateToProps)(Homes);
