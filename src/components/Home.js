import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [coord, setCoord] = useState({
    longitude: 0,
    latitude: 0,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoord({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        })
        console.log(position)
      },
      (error) => {
        console.log(error)
      },
      // enable gps location in the device
      {
        enableHighAccuracy: true,
      }
    )
  }, [])

  return (
    <>
      <h1>Location</h1>
      <p>Latitude: {coord.latitude}</p>
      <p>Longitude: {coord.longitude}</p>

      <Link
        to={{
          pathname: '/map',
          state: coord,
        }}
      >
        See in the Map
      </Link>
    </>
  )
}

export default Home
