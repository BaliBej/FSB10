const APIKEY = '18e8e98257c4498dbff182514212611';

async function getWeather(city) {

    // Usunięcie jeśli istnieje prognoza wyświetlana wcześniej (tylko jeśli klonujemy wzór)
    const existingModules = document.querySelectorAll('.module__weather');

    if (existingModules.length > 1) {
        existingModules[1].remove();
    }

    try {
        // Pokazujemy 'kółko ładowania'
        document.querySelector('.loading').style.display = 'block';

        // operator ?? (nullish coalescing)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city ?? 'auto:ip'}&days=5`)
        const data = await response.json();

        // 1. Klonujemy wzór
        const weatherModule = document.querySelector('.module__weather').cloneNode(true);
        // Usuwamy atrybut hidden który sprawia, że element jest niewidoczny
        weatherModule.removeAttribute('hidden');

        // 2. Korzystamy bezpośrednio z wzoru
        // const weatherModule = document.querySelector('.module__weather');
        // weatherModule.hidden = false;

        // TODO: uzupełnić pozostałe dane, ikony itp. itd. poniższy kod to jedynie przykład sprawiąjący, że efekt pobrania pogody staje się namacalny
        // Nazwa miasta
        weatherModule.querySelector('.city__name').textContent = data.location.name;
        // Ciśnienie
        weatherModule.querySelector('.pressure__value').textContent = `${data.current.pressure_mb} hPa`;

        // Uzupełnienie temperatury
        weatherModule.querySelectorAll('.temperature').forEach((day, index) => {
            // 'hack' w związku z brakiem możliwości pobrania większej ilości danych, dla elementów 4 i 5-ego podstawiamy wartość z elementu 3
            if (index > 2) {
                index = 2;
            }
            day.textContent = `${data.forecast.forecastday[index].day.avgtemp_c}°C`;
        });

        // Wpinamy prognozę pogody do drzewa DOM (tylko jeśli klonujemy)
        document.querySelector('section').appendChild(weatherModule);

        // Ukrywamy 'kółko ładowania'
        document.querySelector('.loading').style.display = 'none';

    } catch(error) {
        console.error(error);
    }

}

// Pobieramy pogodę dla aktualnego miejsca (domyślnie bez parametru)
getWeather();

// Pokazujemy formularz do wpisania miasta
document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.module__form').removeAttribute('hidden');
});

// Obsługujemy wyszukiwanie prognozy dla podanego miasta
document.querySelector('button[type=submit]').addEventListener('click', (event) => {
    event.preventDefault();
    const city = document.querySelector('input[name=search]').value;
    // Pobieramy pogodę dla wskazanego miasta
    getWeather(city);
});
