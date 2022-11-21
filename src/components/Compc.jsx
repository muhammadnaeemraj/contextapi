import React from "react";
import { FirstName } from "../App";

const Compc = (prop) => {
  return(
    <>
    <h1>
      <FirstName.Consumer>
        {
          (fname)=>{
            return(
              <h1>My name is {fname}</h1>
            );
          }
        }
      </FirstName.Consumer>
    </h1>
    </>
  );
};

export default Compc;
