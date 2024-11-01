import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.obtenerPersonajeInfo(theid)
	}, [])
	return (
		<div className="container">
			<div className="card mb-3" style={{maxWidth: "1000px"}}>
				<div className="row g-0">
					<div className="col-md-4 p-3">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${store.person.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.person?.properties?.name}</h5>
							<p className="card-text">{store.person.description}</p>
							<p className="card-text"><small className="text-body-secondary">birth_year: {store.person?.properties?.birth_year}</small></p>
							<p className="card-text"><small className="text-body-secondary">eye_color: {store.person?.properties?.eye_color}</small></p>
							<p className="card-text"><small className="text-body-secondary">gender: {store.person?.properties?.gender}</small></p>
							<p className="card-text"><small className="text-body-secondary">hair_color: {store.person?.properties?.hair_color}</small></p>
							<p className="card-text"><small className="text-body-secondary">height: {store.person?.properties?.height}</small></p>
							<p className="card-text"><small className="text-body-secondary">mass: {store.person?.properties?.mass}</small></p>
							<p className="card-text"><small className="text-body-secondary">skin_color: {store.person?.properties?.skin_color}</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
/* 
birth_year
: 
"19BBY"
created
: 
"2024-11-01T05:59:29.126Z"
edited
: 
"2024-11-01T05:59:29.126Z"
eye_color
: 
"blue"
gender
: 
"male"
hair_color
: 
"blond"
height
: 
"172"
homeworld
: 
"https://www.swapi.tech/api/planets/1"
mass
: 
"77"
name
: 
"Luke Skywalker"
skin_color
: 
"fair"
*/