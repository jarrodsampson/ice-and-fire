import React from 'react';
import { Button } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="character">
            <DocumentTitle title={props.aliases[0] + " -  Ice and Fire The Series"} />
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