import React from 'react';
import { NavLink } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="list-holder">

            {props.characters.map((character, i) => {

                return (
                    <div key={character.url} className="data-list-item">
                        <div className="listItem">
                            <NavLink to={'/character/' + (i + 1)}> {character.aliases[0] || character.name} <Glyphicon glyph="search" /></NavLink>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}