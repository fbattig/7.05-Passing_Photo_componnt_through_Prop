import React from "react";
import AnimalDetails from "./AnimalDetails";
import Photo from "./Photo";
const Animal = (props) => {
  const details = props.details;
  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <AnimalDetails
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Animal;
