import React from 'react';
import { Button } from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="character">
            <div>
                <Button onClick={props.goBack}>Back</Button>
            </div>
            <div className="details">
                <p>Alias: {props.aliases[0]}</p>
                <p>Real Name: {props.name || "Unknown"}</p>
                <p>Culture: {props.culture || "Unknown"}</p>
                <p>Gender: {props.gender || "Unknown"}</p>

            </div>
        </div>
    );
}