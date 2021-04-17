import React from "react";
import { useStyles } from "./styles";
import { Burger } from "../burger/Burger";
import { Props } from "./types";

export const Nav: React.FC<Props> = ({ handleBurger, open }) => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <button className={classes.interior}>this interior</button>
      <ul className={classes.links}>
        <li className={classes.link}>home</li>
        <li className={classes.link}>collection</li>
        <li className={classes.link}>about</li>
        <li className={classes.link}>contant</li>
      </ul>
      <Burger open={open} handleBurger={handleBurger} />
    </nav>
  );
};
