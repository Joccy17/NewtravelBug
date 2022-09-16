import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import '../assets/maps.css'
import maps from "../assets/img/maps.png"
function Maps(){
    return(
        <>
        <Header/>
    <section class="Homepage">
        <img src={maps} alt=""/>
    </section>
        <Footer/>
        </>
    )
}
export default Maps