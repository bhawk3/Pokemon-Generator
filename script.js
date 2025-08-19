async function getData() {
	try {
		const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
		//Fetching data from api
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

		//If the api call is not ok then throw this error
		if (!response.ok) {
			throw new Error("Could not get the data");
		}
		//if you get to this point then the call is good.
		// Set the data into json and assign it to data.
		//log the data
		const data = await response.json();
		const pokemonImg = data.sprites.front_default; //This is where the img is within the api obj for the pokemon
		const imgElement = document.getElementById("pokemon-img");

		//Set pokemon img src to be the link from where in response the url is
		imgElement.src = pokemonImg;

		//Set the pokemon img to not be hidden anymore
		imgElement.style.display = "block";
	} catch (error) {
		console.log(error);
	}
}
