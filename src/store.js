import { writable } from 'svelte/store';

export const weatherList = (() => {
    const { subscribe, update } = writable([]);
    
    return {
        subscribe,
        add: (weatherInfo) => update(wList => [...wList, weatherInfo]),
        remove: (index) => update(wList => {
            wList.splice(index, 1);
            return wList;
        }),
    }
})();


export const cityList = (() => {
    const { subscribe, update } = writable([]);
    
    return {
        subscribe,
        add: (cityName) => update(cList => [...cList, cityName]),
        remove: (index) => update(cList => {
            cList.splice(index, 1);
            return cList;
        }),
    }
})();
