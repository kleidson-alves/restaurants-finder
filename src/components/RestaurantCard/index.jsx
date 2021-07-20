import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import Skeleton from '../Skeleton';
import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = ( { restaurant, onClick  } ) => {

  const [imageLoader, setImageLoader] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} half edit={false} value = {restaurant.rating} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto imageLoaded = {imageLoader} src={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt={restaurant.name} onLoad={() => setImageLoader(true)}/>
      {!imageLoader && <Skeleton width="100px" height="100px"/> }
    </Restaurant>
  );
}

export default RestaurantCard;
