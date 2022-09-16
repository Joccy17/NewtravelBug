import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../assets/Home.css";
import shape from "../assets/img/Shape1.png";
import search from "../assets/img/searchicon.png";
import background from "../assets/img/background.png";

import play from "../assets/img/Play icon.png";
import video from "../assets/img/videobackground.png";
import whiteShape from "../assets/img/White Shape 1.png";
import innerImage from "../assets/img/Discover inner image.png";
import subscribe from "../assets/img/Subscribe background.png";
import map from "../assets/img/map.png";
import Search from "../components/common/Search";

import CategoriesList from "../components/common/CategoriesList";
import Grid from "../components/common/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../reducks/places/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { fetchCategories } from "../reducks/categories/operation";
import { fetchFromLocalStorage } from "../reducks/favorites/operations";
import { getCategories } from "../reducks/categories/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log("categories", categories);
  console.log("places", places);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Header />

      <section class="Homepage">
        <img src={background} alt="" />

        <Search img={search} />
        <div class="shade"></div>
      </section>

      <div class="heading1">
        <h1>Natural Wonders</h1>
        <img src={shape} alt="" />
      </div>
      <section class="content">
        {categories.map((category) => {
          return <CategoriesList key={category.id} category={category} />;
        })}
      </section>

      <div class="heading1">
        <h1>Tourist Attractions in USA</h1>
        <img src={shape} alt="" />
      </div>
      <section class="grid">
        {places &&
          places.length > 0 &&
          places.map((place) => <Grid place={place} />)}
      </section>
      <section class="Video">
        <img src={video} alt="" class="src" />
        <div class="caption">
          <h5>DISCOVER</h5>
          <p>Watch Our Video Tour</p>
          <img src={whiteShape} id="wavywhite" alt="" />
        </div>
        <div class="innerImage">
          <img src={innerImage} alt="" />
        </div>
        <div class="play">
          <img src={play} alt="" />
        </div>
      </section>
      <section>
        <div class="subscribe">
          <img src={subscribe} alt="" class="src" />
          <div class="shade"></div>
          <p>Get 10% Off on Your Next Travel</p>
          <div className="discount">
            <p>Maximum discount $1000 per person</p>
          </div>

          <div class="sub-button">
            <input type="text" class="text" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </section>
      <div class="map">
        <img src={map} alt="" class="src" />
      </div>
      <Footer />
    </>
  );
};
export default Home;
