import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from 'react-redux';

import { Wropper ,Container, Search, Logo, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map, Loadder, Skeleton } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpend, setModalOpend] = useState(false);
  const { restaurants, restaurantSelected } = useSelector(state => state.restaurants);


  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if(e.key === 'Enter')
      setQuery(inputValue);
  }

  function handleOpenModal (placeId) {
    setPlaceId(placeId);
    setModalOpend(true);
  }

  return(
    <Wropper>
      <Container>
        <Search>
          <Logo src={logo} alt="restaurants-search" />

          <TextField
            label='Pesquisar'
            // onTrailingIconSelect={() => set({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          ><Input
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
            />
          </TextField>
          {restaurants.length > 0 ?
          <>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            { restaurants.map(restaurant =>
              <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name}/>
                )}

          </Carousel>
          </>  : <Loadder/>

        }
          {restaurants.map((restaurant) => (
            <RestaurantCard  onClick = {() => handleOpenModal(restaurant.place_id)}  restaurant={restaurant}/>
          ))}
        </Search>
      </Container>
        <Map query={query} placeId = {placeId} />
        <Modal open={modalOpend} onClose={() => setModalOpend(!modalOpend)}>
            {restaurantSelected ? (
              <>
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora' : 'Fechado' }</ModalContent>
              </>
            ) : (
              <>
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
              </>
            )}
        </Modal>
    </Wropper>
  )
}

export default Home;
