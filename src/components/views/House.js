import React from 'react';
import { Button } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
// Using "Stateless Functional Components"
export default function(props) {
    console.log("Props", props);
    return (
        <div className="home paddingExtra">
            <DocumentTitle title={props.house.name + " -  Ice and Fire The Series"} />

            <div className="row col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{props.house.name}</h3>
                    </div>
                    <div className="panel-body">

                        <div>
                            <Button onClick={props.goBack}>Back</Button>
                            <hr />
                        </div>

                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Basic</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">
                                        <p>{props.house.coatOfArms || "No Description"}</p>
                                        <p>Region: {props.house.region || "Unknown"}</p>
                                        <p>Founded: {props.house.founded || "Unknown"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Overlord House</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">
                                        <p>{props.overlord.name}</p>
                                        <p>{props.overlord.coatOfArms || "No Description"}</p>
                                        <p>Region: {props.overlord.region || "Unknown"}</p>
                                        <p>Founded: {props.overlord.founded || "Unknown"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Founder</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">
                                        <p>Real Name: {props.founder.name || "Unknown"}</p>
                                        <p>Culture: {props.founder.culture || "Unknown"}</p>
                                        <p>Gender: {props.founder.gender || "Unknown"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Current Lord</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">
                                        <p>Real Name: {props.currentLord.name || "Unknown"}</p>
                                        <p>Culture: {props.currentLord.culture || "Unknown"}</p>
                                        <p>Gender: {props.currentLord.gender || "Unknown"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Sworn Members ({props.swornMembers.length})</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">
                                        {props.swornMembers.map((member, i) => {
                                            if (props.swornMembers.length > 0) {
                                                return (
                                                    <div key={i}>
                                                        <p>Real Name: {member.name || "Unknown"}</p>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="noResults">
                                                        <p>No Sworn Members Found.</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Ancestral Weapons ({props.house.ancestralWeapons.length})</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">
                                        {props.house.ancestralWeapons.map((weapon, i) => {
                                            if (props.house.ancestralWeapons.length > 0) {
                                                return (
                                                    <div key={i}>
                                                        <p>{weapon || "Unknown"}</p>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="noResults">
                                                        <p>No Weapons Found.</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Cadet Branches Weapons ({props.house.cadetBranches.length})</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">

                                        {props.house.cadetBranches.map((branch, i) => {
                                                return (
                                                    <div key={i}>
                                                        <p>{branch || "Unknown"}</p>
                                                    </div>
                                                )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Titles ({props.house.titles.length})</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">

                                        {props.house.titles.map((title, i) => {
                                            if (props.house.titles.length > 0) {
                                                return (
                                                    <div key={i}>
                                                        <p>{title || "Unknown"}</p>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="noResults">
                                                        <p>No Titles Found.</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Seats ({props.house.seats.length})</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="details">

                                        {props.house.seats.map((seat, i) => {
                                            if (props.house.seats.length > 0) {
                                                return (
                                                    <div key={i}>
                                                        <p>{seat || "Unknown"}</p>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="noResults">
                                                        <p>No Seats Found.</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}