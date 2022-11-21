import React from "react";
import Compc from "./Compc";
import { FirstName, LastName } from "../App";

const Compb = (prop) => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <h2>My first name is {fname}.</h2>
              <LastName.Consumer>
                {(lname) => {
                  return <h2>My last name is {lname}</h2>;
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default Compb;
