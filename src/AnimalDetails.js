import React from "react";

const AnimalDetails = (props) => {
  const { name, number, endangered } = props.detail;
  return (
    <li key={props.name}>
      <p>{props.image}</p>
      <p> name: {name}</p>
      <p> number: {number}</p>
      <p> endangered: {endangered ? "Yes" : "No"}</p>
      <hr />
    </li>
  );
};

export default AnimalDetails;
