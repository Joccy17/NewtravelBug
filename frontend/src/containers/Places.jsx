import React, { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../assets/places.css";
import maps from "../assets/img/maps.png";
import backgroundImage from "../assets/img/Background image.png";
import arrow from "../assets/img/arrow image.png";
import subImage1 from "../assets/img/sub image 1.png";
import subImage2 from "../assets/img/sub image 2.png";
import subImage3 from "../assets/img/sub image 3.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchFromLocalStorage } from "../reducks/favorites/operations";
import queryString from "query-string";
import { getPlaces } from "../reducks/places/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { Card } from "../components/common/Card";
import { useParams } from "react-router";

const Places = (props) => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  const [id, setId] = useState();

  let temp1 = document.URL;

  useEffect(()=>{
      temp1 = temp1[temp1.length - 1];
      console.log("cvb", temp1);
      setId(parseInt(temp1));
  }, [temp1])
  useEffect(() => {
    let temp1 = parsed.search;
    console.log("cvb", temp1);
  }, []);
  // useEffect(() => {
  //   dispatch(fetchPlaces(places));
  //   dispatch(fetchFromLocalStorage());

  //   if (parsed.search !== undefined) {
  //     setSearch(parsed.search);
  //   }
  //   if (parsed.category !== undefined) {
  //     setCategory(parsed.category);
  //   }
  // }, []);
  useEffect(() => {
    // if (search != null || category != null) {
    //   let id = 2;
    //   dispatch(fetchPlaces(search, category, id));
    // }
    dispatch(fetchPlaces(search, category, id));
  }, [search, category, id]);

  return (
    <>
      <Header />
      <section class="Homepage">
        {places.map((place) => {
          return <Card place={place} />;
        })}
      </section>
      <Footer />
    </>
  );
};
export default Places;
