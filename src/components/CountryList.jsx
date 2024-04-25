import React from 'react'
import Loader from '../ui/Loader'
import Message from '../ui/Message'
import CountryItem from './CountryItem'
import { useCities } from '../contexts/CityContext';

function CountryList() {

    const { cities, isLoading } = useCities();


    if (isLoading) return <Loader />

    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

    const countries = cities
        .reduce((arr, next) => {
            if (!arr.map(el => el.country).includes(next.country)) {
                const { country, emoji } = next;
                return [...arr, { country, emoji }]
            }
            return arr;
        }, [])

    return <ul className='self-start w-full grid grid-cols-2 gap-3'>
        {countries.map((country) => (
            <CountryItem key={country.country}  {...country} />
        ))}
    </ul>

}

export default CountryList