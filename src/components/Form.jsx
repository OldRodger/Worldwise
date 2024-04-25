import React, { useEffect, useState } from 'react'
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import useUrlPosition from '../hooks/useUrlPosition';
import Message from '../ui/Message';
import Loader from '../ui/Loader';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from '../contexts/CityContext';


function formatDate(date) {
    return new Date().toLocaleDateString('en-GB')
}

function convertToEmoji(countryCode) {
    const codePoint = countryCode
        .toUpperCase()
        .split("")
        .map(char => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoint);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";


function Form() {
    const navigate = useNavigate();
    const [lat, lng] = useUrlPosition()
    const { createCity, isLoading } = useCities()

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [emoji, setEmoji] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");

    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const [geocodingError, setGeocodingError] = useState("");



    useEffect(function () {
        if (!lat && !lng) return;

        async function fetchCityData() {
            try {
                setIsLoadingGeocoding(true);
                setGeocodingError("")

                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();

                if (!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else 😉")

                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode))
            } catch (err) {
                setGeocodingError(err.message);
            } finally {
                setIsLoadingGeocoding(false);
            }
        }

        fetchCityData();

    }, [lat, lng])


    async function handleSubmit(e) {
        e.preventDefault();

        if (!cityName || !date) return;

        const newCity = {
            cityName,
            country,
            emoji,
            date,
            notes,
            position: { lat, lng }
        }

        createCity(newCity);
        navigate("/app/cities")


    }


    if (!lat && !lng) return <Message message="Start by clicking the map" />

    if (isLoadingGeocoding) return <Loader />

    if (geocodingError) return <Message message={geocodingError} />

    return <div className='w-full'>
        <form className={`p-4 bg-dark--2 ${isLoading && 'opacity-30'}`} onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 mb-6' >
                <label htmlFor="city" className='grid gap-1'>
                    <span>City name</span>
                    <div className='px-4 py-2 rounded-md text-dark--0 flex bg-white'>
                        <input
                            type="text"
                            value={cityName}
                            onChange={e => setCityName(e.target.value)}
                            id='city'
                            className='flex-1 outline-none'
                        />
                        <span className='text-2xl'>{emoji}</span>
                    </div>
                </label>

                <label htmlFor="date" className='grid gap-1'>
                    <span>When did you go to {cityName}?</span>
                    <DatePicker
                        className=' w-full px-4 py-2 rounded-md text-dark--0'
                        selected={date}
                        onChange={date => setDate(date)}
                    />
                </label>

                <label htmlFor="notes" className='grid gap-1'>
                    <span>Note about your trip to {cityName} </span>
                    <textarea
                        type="text"
                        rows={8}
                        id='notes'
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        className='px-4 py-2 rounded-md text-dark--0'
                    />
                </label>
            </div>
            <div className='flex justify-between'>
                <Button type="primary">Add</Button>
                <Button type="back" onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}>&larr; Back</Button>
            </div>
        </form>
    </div>
}

export default Form