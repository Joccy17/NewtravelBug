import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
} from "../../reducks/favorites/operations";
import { getFavorites } from "../../reducks/favorites/selectors";
import likeIcon from "../../assets/img/Like icon.png";
import heart from "../../assets/img/heart.svg";
import { useParams } from "react-router";
const Grid = ({ place }) => {
  console.log(place);
  const dispatch = useDispatch();
  const clickFavorite = (place) => {
    dispatch(addFavorite(place));
  };
  const selector = useSelector((state) => state);
  const favorites = getFavorites(selector);
  const [showLikeButton, setShowLikeButton] = useState(false);
  useEffect(() => {
    let favoritePlace = favorites.filter((favorite) => favorite.id == place.id);
    console.log("favoritePlace", favoritePlace);
    if (favoritePlace.length > 0) {
      setShowLikeButton(true);
    } else {
      setShowLikeButton(false);
    }
  }, [favorites]);

  return (
    <div class="container">
      <Link to={"/places/" + place.id}>
        <img
          src={place.image}
          alt=""
          class="src"
          //   onClick={() => dispatch(push("/places/" + place.id))}
        />
      </Link>
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <div class="like">
        {/* <img src={likeIcon} alt="" class="src" onClick={() => clickFavorite(place)} /> */}
        {showLikeButton ? (
          <img
            src={heart}
            onClick={() => {
              dispatch(deleteFavorite(place.id));
            }}
            id="like"
          />
        ) : (
          <img
            src={likeIcon}
            onClick={() => {
              clickFavorite(place);
            }}
            id="heart"
          />
        )}
      </div>
    </div>
  );
};
export default Grid;
