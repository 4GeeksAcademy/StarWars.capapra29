const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			person: {}
		},
		actions: {
			// Use getActions to call a function within a fuction

			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json()
					setStore({ people: data.results })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json()
					setStore({ planets: data.results })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerPersonajeInfo: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/"+id)
					const data = await response.json()
					console.log (data.result)
					setStore({ person: data.result })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
		}
	};
};

export default getState;
