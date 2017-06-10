import React from 'react';
import { NavLink } from 'react-router-dom';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.books.map((book, i) => {

                return (

                    <div key={book.isbn} className="card">
                        <div className="details card-block">
                            <h4 className="card-title">{book.name}</h4>
                            <NavLink to={'/book/' + (i + 1)}>Details</NavLink>
                        </div>


                    </div>
                );

            })}

        </div>
    );
}