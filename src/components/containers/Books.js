import React, { Component } from 'react';
import '../../css/Books.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';
import BookList from '../views/BookList';

class Books extends Component {

    getContent() {
        APIService.getAllBooks();
    }
    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    Books
                </p>

                <div>
                    <BookList books={this.props.books} />
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

export default connect(mapStateToProps)(Books);