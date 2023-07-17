<script>
    import { weatherList, cityList } from './store.js';

    let latitude = '';
    let longitude = '';

    function getFetchUrl(latitude, longitude) {
        return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`;
    }

    function getCityData(latitude, longitude) {
        return `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
    }

    async function addWeatherInfo() {
        const res = await fetch(getFetchUrl(latitude, longitude));
        // const city = await fetch(getCityData(latitude, longitude));
        if (res.status === 404) {
            alert('Invalid Lat Long');
        } else {
            weatherList.add(await res.json());
        }
       
        // cityList.add(await city.json());

        latitude = '';
        longitude = '';
    }
</script>

<div class="search-form">
    <input type="text"
           placeholder="Latitude"
           bind:value={latitude}
    />
     <input type="text"
           placeholder="Longitude"
           bind:value={longitude}
    />
    <button type="button" on:click={addWeatherInfo}>ADD</button>
</div>

