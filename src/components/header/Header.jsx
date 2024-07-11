import React from "react";
import styles from "./Header.module.scss";
import world from "/world.svg";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>
            <img src={world} alt="" />
            my travel journal.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
