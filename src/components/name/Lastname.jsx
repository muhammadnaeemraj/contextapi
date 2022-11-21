import React from "react";
import { LastName } from "../../App";

const Lastname = () => {
  return (
    <>
      <LastName.Consumer>
        {(lname) => {
          return <h5>My last name is {lname}</h5>;
        }}
      </LastName.Consumer>
    </>
  );
};

export default Lastname;
