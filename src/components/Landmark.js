import React from 'react'
import { Marker, Popup } from 'react-leaflet'

import { Icon } from './Icon'

const Landmark = ({ places, location }) => {
  return (
    <>
      {places.map((place) => (
        <Marker key={place.name} position={place.geometry} icon={Icon}>
          <Popup>
            <div>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <Marker position={[location.latitude, location.longitude]} icon={Icon}>
        <Popup>
          <h3>I'm here'</h3>
        </Popup>
      </Marker>
    </>
  )
}

export default Landmark
