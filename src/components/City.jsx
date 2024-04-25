import React, { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useCities } from '../contexts/CityContext';
import Loader from '../ui/Loader';
import Button from '../ui/Button';

const formatDate = date => (new Date(date)
    .toLocaleDateString('en-CA', {
        month: "long",
        day: "numeric",
        year: "numeric",
        weekday: "long"
    }))

function City() {
    const navigate = useNavigate()
    const { id } = useParams();
    const { getCity, isLoading, currentCity } = useCities();
    
    useEffect(() => {
        getCity(id);
    }, [id, getCity])

    if (isLoading) return <Loader />



    return <div className='w-full p-8 bg-dark--2 rounded-lg grid gap-5'>
        <div className='grid gap-1'>
            <h6 className='text-[11px] font-semibold text-light--1 uppercase'>city name</h6>
            <h3 className='text-2xl flex items-center gap-2 font-bold'>
                <span className='text-3xl'>{currentCity?.emoji}</span>{currentCity?.cityName}
            </h3>
        </div>

        <div className='grid gap-1'>
            <h6 className='text-[11px] font-semibold text-light--1 uppercase'>You went to {currentCity?.cityName} on</h6>
            <p>{formatDate(currentCity?.date || null)}</p>
        </div>

        {(currentCity?.notes && <div className='grid gap-1'>
            <h6 className='text-[11px] font-semibold text-light--1 uppercase'>Your notes</h6>
            <p>{currentCity.notes}</p>
        </div>)}

        <div className='grid gap-1'>
            <h6 className='text-[11px] font-semibold text-light--1 uppercase'>Learn more</h6>
            <a href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`}
                target='_blank' rel='noreferrer'
                className='underline text-brand--1'
            >
                Check out {currentCity?.cityName} on Wikipedia &rarr;
            </a>
        </div>

        <div>
            <Button type="back" onClick={() => navigate(-1)}>&larr; Back</Button>
        </div>
    </div>
}

export default City