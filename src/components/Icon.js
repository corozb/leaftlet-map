import leaf from 'leaflet'

export const Icon = leaf.icon({
  iconUrl: require('../assets/marker.svg'),
  iconRetinaUrl: require('../assets/marker.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon',
})
