fetch('https://pokeapi.co/api/v2/pokemon')
    .then(resp => resp.json())
    .then(data => {

        const list = document.querySelector('.list');

        data.results.forEach((pokemon, index) => {

            const pokemonElement = document.createElement('li');
            pokemonElement.innerText = pokemon.name.toUpperCase();

            const pokemonImage = document.createElement('img');
            pokemonImage.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`)

            pokemonElement.appendChild(pokemonImage);

            list.appendChild(pokemonElement);

        })

    })
