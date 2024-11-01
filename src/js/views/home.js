
import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "./card"
import { Context } from "../store/appContext";
import CardPlanets from "../component/cardplanets";

export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => {
		actions.obtenerPersonajes()
		actions.obtenerPlanetas()
	}, [])
	return (
		<div className="text-center mt-5">
			<h1> Star Wars API</h1>
			<h1>Personajes</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.people.map((item, index) => {
					return (
						<Card
							key={index}
							id={item.uid}
							name={item.name}
							imgURL={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
						/>
					)
				})}
			</div>
			<h1 className="mt-4">Planetas</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.planets.map((item, index) => {
					return (
						<CardPlanets
							key={index}
							id={item.uid}
							name={item.name}
							imgURL={item.uid == 1 ?
								"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
								: `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
						/>
					)
				})}
			</div>
		</div>
	)
};
