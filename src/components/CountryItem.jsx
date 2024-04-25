import React from 'react'

const formateDate = date => (new Date(date)
    .toLocaleDateString('en-CA', {
        month: "long",
        day: "numeric",
        year: "numeric"
    }))

function CountryItem({ country, emoji }) {

    return (
        <li className='bg-dark--2 rounded-md flex flex-col justify-center items-center py-2 px-4 border-l-4 border-brand--2 '>
            <span>{emoji}</span>
            <h3>{country}</h3>
        </li>
    )
}

export default CountryItem 