import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../assets/favorite.css";
import shape from "../assets/img/Shape1.png";
import search from "../assets/img/searchicon.png";
import background from "../assets/img/background.png";
import hollywood from "../assets/img/Hollywood.png";
import miami from "../assets/img/Miami.png";
import newyork from "../assets/img/New York.png";
import sanFrancisco from "../assets/img/San Francisco.png";
import lasVegas from "../assets/img/Las Vegas.png";
import newYork from "../assets/img/New york 2.png";
import sanFrancisco2 from "../assets/img/San francisco 2.png";
import chicago from "../assets/img/Chicago.png";
import likeIcon from "../assets/img/Like icon.png";
import redLikeIcon from "../assets/img/Red like icon.png";
import waltDisney from "../assets/img/Walt disney world.png";
import miami2 from "../assets/img/Miami 2.png";
import sanDiego from "../assets/img/San diego.png";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../reducks/favorites/selectors";
import { fetchFavoriteAction } from "../reducks/favorites/actions";
import Grid from "../components/common/Grid";
import { fetchFromLocalStorage } from "../reducks/favorites/operations";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operation";
import CategoriesList from "../components/common/CategoriesList";
import Favhead from "../components/common/Favhead";

const Favorite=()=> {
  const dispatch =useDispatch()
  const selector=useSelector(state=>state)
  const favorites=getFavorites(selector)
  console.log('favorite',favorites);
  
  useEffect(()=>{
    dispatch(fetchFavoriteAction())
    dispatch(fetchFromLocalStorage())
  },[])
  const categories=getCategories(selector)
  
  useEffect(()=>{
    dispatch(fetchCategories())
  },[])
  return (
    <>
      <Header />

      <section class="Homepage">
        <img src={background} alt="" />
        <div class="search">
          <h1>The United Place on Earth</h1>
          <br />
          <input type="text" placeholder="Search your destination" />
          <img src={search} alt="" />
        </div>
        <div class="shade"></div>
      </section>

      <div class="heading1">
        <h1>Natural Wonders</h1>
        <img src={shape} alt="" />
      </div>
      <section class="content">
        {categories.map((category)=>{
          return <CategoriesList key={category.id} category={category}/>
        })}
      </section>

      <div class="heading1">
        <h1>Tourist Attractions in USA</h1>
        <img src={shape} alt="" />
      </div>
      <div class="grid">
        {favorites.map((favorite)=>{
          return <Favhead favorite={favorite}/>
        })}
         
      </div>
      

      <Footer />
    </>
  );
}
export default Favorite;
