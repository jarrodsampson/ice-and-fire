import React from 'react';
import { NavLink } from 'react-router-dom';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.characters.map((character, i) => {

                return (
                    <div key={character.url} className="data-list-item">
                        <div className="details">
                            <NavLink to={'/character/' + (i + 1)}>{character.aliases[0]}</NavLink>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}