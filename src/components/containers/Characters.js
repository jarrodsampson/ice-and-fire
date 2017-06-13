import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import '../../css/Characters.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';
import CharacterList from '../views/CharacterList';
class Characters extends Component {

    getContent(page, size) {
        APIService.getAllCharacters(page, size);
    }
    componentDidMount() {
        this.getContent(1, 50);
    }

    render() {
        return (
            <div className="App">
                <DocumentTitle title='Characters - Ice and Fire The Series' />
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
