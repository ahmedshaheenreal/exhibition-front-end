import React, { useEffect, useState } from "react";
import styles from "./Exhibition.module.css";
import Card from "../components/Card";

function Exhibition() {
  return (
    <main>
      <div className={styles.exhibitionContainer + " container"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Exhibition;
