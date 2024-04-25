import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCities } from '../contexts/CityContext';
import useGeolocation from '../hooks/useGeoLocation';
import Button from '../ui/Button';
import useUrlPosition from '../hooks/useUrlPosition';
import Loader from '../ui/Loader';
import User from './User';

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0])
  const { cities } = useCities();
  const { isLoading: isLoadingPosition, getPosition, position: geolocationPosition } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();



  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
  }, [geolocationPosition])




  return (
    <div className='bg-black flex-1 relative'>

      <User />

      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? (<span className='flex items-center gap-2'>
            <span>Loading</span>
            <Loader size="sm" />
          </span>) : <span>Use your position</span>}
        </Button>
      )}

      <MapContainer center={mapPosition} zoom={6} className='h-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={mapPosition} />
        <DetectClick />

        {cities.map(city => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]} >
            <Popup>
              <span className='flex items-center gap-1'>
                <span className='text-xl'>{city.emoji}</span>
                <span>{city.cityName}</span>
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div >
  )
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`)
    }
  });
  return null;
}


export default Map