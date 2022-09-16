import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Prev = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={category.image} alt="" />
      <a onClick={() => dispatch(push("/"))}>
        {/* <img src={close} alt="" className="close" /> */}
      </a>
    </div>
  );
};
export default Prev;
