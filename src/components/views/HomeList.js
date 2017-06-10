import React from 'react';
import { NavLink } from 'react-router-dom';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="data-list">

            {props.homes.map((home, i) => {

                return (
                    <div key={home.name} className="data-list-item">
                        <div className="details">
                            <NavLink to={'/home/' + (i + 1)}>{home.name}</NavLink>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}