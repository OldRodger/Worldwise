import React from 'react'
import Loader from '../ui/Loader'
import CityItem from './CityItem'
import Message from '../ui/Message'
import { useCities } from '../contexts/CityContext'

function CityList() {
    const { cities, isLoading } = useCities();
    if (isLoading) return <Loader />

    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

    return <ul className='self-start w-full space-y-3'>
        {cities.map((city) => (
            <CityItem key={city.id} {...city} />
        ))}
    </ul>

}

export default CityList