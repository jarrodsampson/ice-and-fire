import React, { Component } from 'react';
import '../../css/Characters.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';
import CharacterList from '../views/CharacterList';
class Characters extends Component {

    getContent() {
        APIService.getAllCharacters();
    }
    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    Characters
                </p>

                <div>
                    <CharacterList characters={this.props.characters} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        books: store.api.books,
        characters: store.api.characters,
        homes: store.api.homes
    };
};

export default connect(mapStateToProps)(Characters);
