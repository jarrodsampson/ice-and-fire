import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.characters.map((character, i) => {

                return (
                    <div key={character.url} className="data-list-item">
                        <div className="list-group">
                            <NavLink to={'/character/' + (i + 1)}><Button className="list-group-item">{character.aliases[0] || "None"}</Button></NavLink>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}