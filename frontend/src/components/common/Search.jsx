import React from "react";
import searchicon from "../../assets/img/searchicon.png"
import {useDispatch} from "react-redux"
import { useState } from "react";
import {push } from 'connected-react-router';
import '../../assets/Home.css'
const Search = ()=> {
    const dispatch = useDispatch ()
    const [search,setSearch] = useState ()
    const inputSearch = event => {
        setSearch (event.target.value)
    }
    const submitAction = () => {
        dispatch (push("/places?search=" + search))
    };
    return (
      <form action="" onSubmit={submitAction}>
        <div class="search">
          <h1>The United Place on Earth</h1>
          <br />
          <input
            type="text"
            placeholder="Search your destination"
            onChange={inputSearch}
          />
          <img src={searchicon} alt="" />
        </div>
      </form>
    );

}
export default Search;
