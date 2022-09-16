import { push } from 'connected-react-router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, deleteFavorite, fetchFromLocalStorage } from '../../reducks/favorites/operations';
import likeIcon from "../../assets/img/Like icon.png";
import heart from "../../assets/img/heart.svg";
import { getPlaces } from '../../reducks/places/selectors';
import { fetchPlaces } from '../../reducks/places/operations';

const  Favhead=({favorite})=> {
 const dispatch =useDispatch()
 const [showLikeButton,setShowLikeButton]=useState(true)
 const selector =useSelector(state=>state)
 const place=getPlaces(selector)
 useEffect(()=>{
   
   fetchFromLocalStorage()
 },[])
 

  return (
    <div className="container">
      <img
        src={favorite.image}
        alt=""
        class="src"
        onClick={() => dispatch(push("/places/" + place.id))}
      />
      <h2>{favorite.name}</h2>
      <p>{favorite.description}</p>
      <div class="like">
        
       
          <img
            src={heart}
            onClick={() => {
             
              dispatch(deleteFavorite(favorite.id));
            }}
            id="like"
          />
       
      </div>
    </div>
  );
}
export default Favhead;