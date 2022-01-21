import React from "react";

import classes from "./BlackNavigationBar.module.css";

import whitelogo from "./whitelogo.png";
import Vector from "./Vector.png";
import dots from "./dots.png";

function BlackNavigationBar() {
  return (
    <header className={classes.header}>
      <div>
        <img
          className={classes.logo}
          src={whitelogo}
          alt="3035 tech"
        />
      </div>
      <div>
        <p className={classes.text}>Responsive Web Design Certification</p>
      </div>
      <nav>
        <button className={classes.button}>
          Compartilhar
          <img
            className={classes.shareImage}
            src={Vector}
            alt="share symbol"
          />
        </button>
        <button className={classes.dots}>
          <img src={dots} alt="three dots" />
        </button>
      </nav>
    </header>
  );
}

export default BlackNavigationBar;
