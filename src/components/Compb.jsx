import React from "react";
import Compc from "./Compc";
import { FirstName } from "../App";

const Compb = (prop) => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return(
            <h2>My first name is {fname}</h2>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default Compb;
