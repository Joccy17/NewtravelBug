import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";
const CategoriesList =({category})=> {
    const dispatch = useDispatch()
    return (
      <div class="hollywood">
        <Link to={'/highlight/'+ category.id}>
          <img src={category.image} alt="" class="src" />
        </Link>
        <p>{category.name}</p>
      </div>
    );
}
export default CategoriesList