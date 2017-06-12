import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.books.map((book, i) => {

                return (

                    <div key={book.isbn} className="col-sm-6 col-md-4">
                        <div className="thumbnail details">
                            <h4 className="">{book.name}</h4>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to={'/book/' + (i + 1)}><Button>Details</Button></NavLink>
                        </div>


                    </div>
                );

            })}

        </div>
    );
}