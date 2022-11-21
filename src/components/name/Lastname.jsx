import React from "react";
import { FirstName } from "../../App";

const Lastname = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <h5>{fname}</h5>;
        }}
      </FirstName.Consumer>
    </>
  );
};

export default Lastname;
