import React, { useState } from 'react'

function useGeolocation(defaultPosition = null) {
    const [error, setError] = useState(null);
    const [position, setPosition] = useState(defaultPosition);
    const [isLoading, setIsLoading] = useState(null);

    function getPosition() {

        if (!navigator.geolocation)
            throw new Error("Browser doesn't support geolocation.");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(position => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
            setIsLoading(false);
        }, err => {
            setError(err.message);
            setIsLoading(false)
        })
    }

    return { getPosition, error, position, isLoading }
}

export default useGeolocation