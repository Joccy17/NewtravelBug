import React from "react";
import logo from '../../assets/img/TRAVEL-BUG-Logo.png'
import '../../assets/Home.css'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
function Header(){
    const dispatch =useDispatch();
    return (
      <>
        <section class="header">
          <section class="navigation">
            <img src={logo} alt="" />
            <div class="navbar">
              <a
                href=""
                class="Home"
                onClick={() => {
                  dispatch(push("/"));
                }}
              >
                HOME
              </a>
              <a href="">WONDERS IN USA</a>
              <a href="">TOURIST ATTRACTION</a>
              <a
                href=""
                onClick={() => {
                  dispatch(push("/favorite"));
                }}
              >
                FAVORITE
              </a>
            </div>
          </section>
        </section>
      </>
    );
}
export default Header