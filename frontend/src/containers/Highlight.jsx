import React, { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../assets/highlight.css";
import shape from "../assets/img/Shape1.png";
import search from "../assets/img/searchicon.png";
import background from "../assets/img/background.png";
import hollywood from "../assets/img/Hollywood.png";
import miami from "../assets/img/Miami.png";
import new_york from "../assets/img/New York.png";
import sanFrancisco from "../assets/img/San Francisco.png";
import lasVegas from "../assets/img/Las Vegas.png";

import play from "../assets/img/Play icon.png";
import video from "../assets/img/videobackground.png";
import whiteShape from "../assets/img/White Shape 1.png";
import innerImage from "../assets/img/Discover inner image.png";
import subscribe from "../assets/img/Subscribe background.png";
import map from "../assets/img/map.png";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../reducks/places/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operation";
import { fetchFromLocalStorage } from "../reducks/favorites/operations";
import Grid from "../components/common/Grid";
import Prev from "../components/common/Prev";

const Highlight = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log(categories);

  const [id, setId] = useState();

  let temp1 = document.URL;

  useEffect(() => {
    temp1 = temp1[temp1.length - 1];
    console.log("cvb", temp1);
    setId(parseInt(temp1));
  }, [temp1]);

  useEffect(() => {
    dispatch(fetchCategories(parseInt(temp1)));
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
    <>
      <Header />
      <div className="prev">
        <div className="blur">
          <section class="Homepage">
            <img src={background} alt="" />

            <div class="shade"></div>

            <div class="heading1">
              <h1>Natural Wonders</h1>
              <img src={shape} alt="" />
            </div>
            <section class="content">
              <div class="hollywood">
                <img src={hollywood} alt="" class="src" />
                <p>Hollywood</p>
              </div>
              <div class="hollywood">
                <img src={miami} alt="" class="src" />
                <p>Miami</p>
              </div>
              <div class="hollywood">
                <img src={new_york} alt="" class="src" />
                <p>New York</p>
              </div>
              <div class="hollywood">
                <img src={sanFrancisco} alt="" class="src" />
                <p>San Franscisco</p>
              </div>
              <div class="hollywood">
                <img src={lasVegas} alt="" class="src" />
                <p>Las Vegas</p>
              </div>
            </section>
          </section>
        </div>

        <div className="index">
          {categories.map((category) => {
            return <Prev key={category.id} category={category} />;
          })}
        </div>
      </div>

      <div class="heading1">
        <h1>Tourist Attractions in USA</h1>
        <img src={shape} alt="" />
      </div>
      <div class="grid">
        {places.map((place) => {
          <Grid place={place} />;
        })}
      </div>
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
          <p>Maximum discount $1000 per person</p>
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
export default Highlight;
