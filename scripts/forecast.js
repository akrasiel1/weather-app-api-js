// API key
const key = 'qS63SW54hBuqDDJuZbQsrQpIfVcK7bGz';

// Async function - getting weather info

const getWeather = async (id) => {
    // declaring variables including API endpoint & query
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;
    // fetching data
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};




// Async function - getting city info

const getCity = async (city) => {
    // declaring variables including API endpoint & query
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    // fetching data
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]; // returning most relevant city data from array
}
