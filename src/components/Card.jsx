import React from "react";
import myImage from "../assets/2A9A7393.jpg";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div className={styles.Card}>
      <Link to={"/"}>
        <div className={styles.imgContainer}>
          <img src={myImage} className={styles.img} />
        </div>
      </Link>
      <div className="text">
        <h2 className={styles.h2}>Name of Art</h2>
        <p className={styles.p}>
          <span>December 10, 2024</span>-<span>March 8, 2025</span>
          <br />
          <span>Grosvenor Hill, London</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
