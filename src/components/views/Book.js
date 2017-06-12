import React from 'react';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import DocumentTitle from 'react-document-title';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="book">
            <DocumentTitle title={props.name + " -  Ice and Fire The Series"} />
            <div>
                <Button onClick={props.goBack}>Back</Button>
            </div>
            <div className="details">
                <p>{props.name}</p>
                <p>{props.mediaType || "No Description"}</p>
                <p>ISBN: {props.isbn || "Unknown"}</p>
                <p>Country: {props.country || "Unknown"}</p>
                <p>Page Count: {props.numberOfPages}</p>
                <p>Publisher: {props.publisher || "Unknown"}</p>
                <p>Released: <Moment fromNow>{props.released}</Moment></p>

                <div>
                    <p>Authors: <small>{props.authors.length}</small></p>

                    {props.authors.map(function(author, i) {
                        return <p key={i}>{author}</p>;
                    })}

                </div>
            </div>
        </div>
    );
}