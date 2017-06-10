import React, { Component } from 'react';
import '../../css/BookDetail.css';

import * as APIService from '../../api/APIService';
import { connect } from 'react-redux';

import Book from '../views/Book';

class BookDetail extends Component {

    getContent(id) {
        APIService.getBookById(id);
    }
    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Book {...this.props.book} goBack={APIService.goBack} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        book: store.api.book
    };
};

export default connect(mapStateToProps)(BookDetail);