import React, {useEffect, useState} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import {  useDispatch, useSelector } from 'react-redux';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => state.restaurants);

  useEffect(() => {
    searchcByQuery(query);
  }, [query])

  useEffect(() => {
    if(placeId){
      getRestaurantsById(placeId)
    }
  }, [placeId]);

  function getRestaurantsById(placeId) {
    if(map) {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null));

      const request =  {
        placeId : placeId,
        fields : ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (place, status) => {
        if(status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        }
      })
     }
  }

  function searchcByQuery(query) {
   if(map) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));

    const request =  {
      location: map.center,
      radius : '200',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if(status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(results));
      }
    })
   }
  }

  function searchNearBy(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));

    const request =  {
      location: center,
      radius : '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if(status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    })
  }

  function onMapReady (_, map) {
    setMap(map);
    searchNearBy(map, map.center);
  }

  return <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} {...props}>
    {restaurants.map( restaurant => (
      <Marker key={restaurant.place_id} name={restaurant.name} position={{
        lat: restaurant.geometry.location.lat(),
        lng: restaurant.geometry.location.lng(),
      }}/>
    ))}
  </Map>
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
