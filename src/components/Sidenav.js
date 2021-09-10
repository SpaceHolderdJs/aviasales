import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Sidenav = () => {
  const dispatch = useDispatch();
  const transfer = useSelector((store) => store.transfer);

  const handleCheck = (e) =>
    dispatch({
      type: "UPDATE_TRANSFER",
      payload: e.target.getAttribute("data-transfer"),
    });

  return (
    <div className="side-nav column shadow">
      <h6>transfers</h6>
      <div className="row centered inp-wrapper">
        <input
          type="checkbox"
          data-transfer="all"
          checked={transfer === "all"}
          onChange={handleCheck}
        />
        <span>All</span>
      </div>
      <div className="row centered inp-wrapper">
        <input
          type="checkbox"
          data-transfer="no"
          checked={transfer === "no"}
          onChange={handleCheck}
        />
        <span>Aint transfers</span>
      </div>
      <div className="row centered inp-wrapper">
        <input
          type="checkbox"
          data-transfer="t1"
          checked={transfer === "t1"}
          onChange={handleCheck}
        />
        <span>1 transfer</span>
      </div>
      <div className="row centered inp-wrapper">
        <input
          type="checkbox"
          data-transfer="t2"
          checked={transfer === "t2"}
          onChange={handleCheck}
        />
        <span>2 transfers</span>
      </div>
      <div className="row centered inp-wrapper">
        <input
          type="checkbox"
          data-transfer="t3"
          checked={transfer === "t3"}
          onChange={handleCheck}
        />
        <span>3 transfers</span>
      </div>
    </div>
  );
};

export default Sidenav;
