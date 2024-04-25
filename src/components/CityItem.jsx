import React from 'react'
import { Link } from 'react-router-dom';
import { useCities } from '../contexts/CityContext';

const formatDate = date => (new Date(date)
    .toLocaleDateString('en-CA', {
        month: "long",
        day: "numeric",
        year: "numeric"
    }))


function CityItem({ id, cityName, emoji, date, position }) {
    const { currentCity, deleteCity } = useCities();
    const activeStyle = "border-2";

    function handleClick(e) {
        e.preventDefault();
        deleteCity(id);
    }
    return (
        <li >
            <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}
                className={`bg-dark--2 rounded-md flex items-center gap-2 py-2 px-4 border-l-4 border-brand--2 cursor-pointer ${(id === currentCity?.id) && activeStyle}`}>
                <span>{emoji}</span>
                <h3>{cityName}</h3>
                <time className='ml-auto'>{formatDate(date)}</time>
                <button type="button" className='h-4 bg-black aspect-square flex items-center justify-center rounded-full hover:bg-brand--1 hover:text-black duration-300'
                    onClick={handleClick}>
                    &times;
                </button>
            </Link>
        </li>
    )
}

export default CityItem;