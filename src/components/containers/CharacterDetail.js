import React, { Component } from 'react';
import '../../css/CharacterDetail.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';

import Character from '../views/Character';

class CharacterDetail extends Component {

    getContent(id) {
        APIService.getCharacterById(id);
    }
    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Character {...this.props.character} goBack={APIService.goBack} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        character: store.api.character
    };
};

export default connect(mapStateToProps)(CharacterDetail);