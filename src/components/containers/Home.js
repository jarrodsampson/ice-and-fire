import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import * as APIService from '../../api/APIService';
import { Parallax } from 'react-parallax';
import { connect } from 'react-redux';
import BookList from '../views/BookList';
import CharacterList from '../views/CharacterList';
import HomeList from '../views/HomeList';

class Home extends Component {

    getContent() {
        APIService.getAllBooks();
        APIService.getAllCharacters();
        APIService.getAllHouses();
    }
    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="App">
                <DocumentTitle title="Ice and Fire - The Series" />
                <Parallax className="banner" bgImage="assets/images/homeBg.jpg" strength={400}></Parallax>
                <div className="container">
                    <h1>Books</h1>
                    <BookList books={this.props.books} />
                    <h1>Characters</h1>
                    <CharacterList characters={this.props.characters} />
                    <h1>Homes</h1>
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

export default connect(mapStateToProps)(Home);
