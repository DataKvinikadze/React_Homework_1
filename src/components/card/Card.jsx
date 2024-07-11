import React from "react";
import styles from "./Card.module.scss";
import Location from "/snip.svg";

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            width={125}
            height={168}
            src={props.imageUrl}
            alt={`${props.title} - Image`}
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.location}>
            <div className={styles.locationName}>
              <img src={Location} alt="Location" />
              <p>{props.title}</p>
            </div>
            <div className={styles.locationMap}>
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
          </div>
          <div className={styles.title}>
            <h3>{props.title}</h3>
          </div>
          <div className={styles.date}>
            <p>{`${props.startDate}-${props.endDate}`}</p>
          </div>
          <div className={styles.about}>
            <p>{props.desciption}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
