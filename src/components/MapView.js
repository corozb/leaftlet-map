import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Landmark from './Landmark'
import { places } from '../assets/data.json'

const MapView = () => {
  const [city, setCity] = useState({
    currentLocation: {
      lat: '6.2363565',
      lng: '-75.6190242',
    },
    zoom: 13,
  })

  const location = useLocation()
  // const history = useHistory()

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      }
      setCity(currentLocation)
    }

    // to delete the current location
    // history.replace({
    //   pathname: '/map',
    //   state: {},
    // })
  }, [])

  return (
    <>
      {/* <Map center={{ lat: ' 6.2363565', lng: '-75.6190242' }} zoom={13}> */}
      <Map center={city.currentLocation} zoom={city.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Landmark places={places} location={location.state} />
      </Map>
    </>
  )
}

export default MapView
