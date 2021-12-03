// Zdecydowanie to nie jest wzorcowe rozwiązanie a jedynie swego rodzaju podpowiedź w którą stronę można pójść... :D

getData('https://pokeapi.co/api/v2/pokemon');

function getData(url) {

    const listClone = document.querySelector('.list');
    document.querySelector('body').replaceChild(listClone.cloneNode(false), listClone);

    if (document.querySelector('.prevPage')) {
        document.querySelector('.prevPage').remove();
    }

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const list = document.querySelector('.list');

            data.results.forEach((pokemon) => {
                const pokeElement = document.createElement('li');
                const pokeImg = document.createElement('img');

                pokeElement.innerText = pokemon.name.toUpperCase();
                const pokeIndex = pokemon.url.split('/');
                pokeImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex[pokeIndex.length - 2]}.png`);

                pokeElement.appendChild(pokeImg);
                list.appendChild(pokeElement);
            });

            if (data.previous !== null) {
                if (document.querySelector('.prevPage')) {
                    document.querySelector('.prevPage').remove();
                }

                const prevPageElem = document.createElement('a');
                prevPageElem.classList.add('prevPage');
                prevPageElem.innerText = 'Prev page';

                prevPageElem.addEventListener('click', function (event) {
                    event.preventDefault();
                    getData(data.previous);
                });

                document.querySelector('body').prepend(prevPageElem);
            }

            if (data.next !== null) {
                if (document.querySelector('.nextPage')) {
                    document.querySelector('.nextPage').remove();
                }

                const nextPageElem = document.createElement('a');
                nextPageElem.classList.add('nextPage');
                nextPageElem.innerText = 'Next page';

                nextPageElem.addEventListener('click', function (event) {
                    event.preventDefault();
                    getData(data.next);
                });

                document.querySelector('body').prepend(nextPageElem);
            }

        })
        .catch(error => {
            console.error(error);
        })
}
