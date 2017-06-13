import React from 'react';
import { NavLink } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
// Using "Stateless Functional Components"
export default function(props) {

    return (
        <div className="list-holder">

            {props.homes.map((home, i) => {

                return (
                        <div key={home.name} className="data-list-item">
                            <div className="listItem">
                                <NavLink to={'/home/' + (i + 1)}>{home.name} <Glyphicon glyph="search" /></NavLink>
                            </div>
                        </div>
                );

            })}

        </div>
    );
}