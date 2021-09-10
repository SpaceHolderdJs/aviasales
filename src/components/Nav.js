import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const pref = useSelector((store) => store.pref);

  return (
    <div className="nav row centered shadow">
      <button
        className={pref === "cheapest" && "active"}
        onClick={() => dispatch({ type: "UPDATE_PREF", payload: "cheapest" })}>
        The cheapest
      </button>
      <button
        className={pref === "fastest" && "active"}
        onClick={() => dispatch({ type: "UPDATE_PREF", payload: "fastest" })}>
        The fastest
      </button>
      <button
        className={pref === "optimal" && "active"}
        onClick={() => dispatch({ type: "UPDATE_PREF", payload: "optimal" })}>
        Optimal
      </button>
    </div>
  );
};

export default Nav;
