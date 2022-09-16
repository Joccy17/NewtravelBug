import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../reducks/favorites/operations';
import { getFavorites } from '../../reducks/favorites/selectors';
import arrow from "../../assets/img/arrow image.png";
import subImage1 from "../../assets/img/sub image 1.png";
import subImage2 from "../../assets/img/sub image 2.png";
import subImage3 from "../../assets/img/sub image 3.png";
import maps from "../../assets/img/maps.png";
import { getPlaces } from '../../reducks/places/selectors';
export const Card=({place})=> {
 const dispatch = useDispatch();
 const clickFavorite = (place) => {
   dispatch(addFavorite(place));
 };
 const selector = useSelector((state) => state);
 const favorites = getPlaces(selector);
 const [showLikeButton, setShowLikeButton] = useState(false);
 useEffect(() => {
   let favoritePlace = favorites.filter((favorite) => favorite.id == place.id);
   
   if (favoritePlace.length > 0) {
     setShowLikeButton(true);
   } else {
     setShowLikeButton(false);
   }
 }, [favorites]);
 
 

  return (
    <>
     <img src={place.image} alt="" />
      <div class="subImage">
        <img src={arrow} alt="" class="arrow" />
        <img src={subImage1} alt="" />
        <img src={subImage2} alt="" />
        <img src={subImage3} alt="" />
      </div>
      <section className="sandDiego">
        <div className="topic">
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </div>
      </section>
      <div class="map">
        <a href={place.googel_map_link}>
          <img src={maps} alt="" />
        </a>
      </div>
    </>
  );
}
