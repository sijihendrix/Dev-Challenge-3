import React from "react";
import { useStyles } from "./styles";
import { Burger } from "../burger/Burger";
import { Props } from "./types";
import { Links } from "../navlinks/Links";
import clsx from "clsx";

export const Nav: React.FC<Props> = ({ handleBurger, open }) => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <button className={clsx(classes.interior, open && classes.navOpen)}>
        this interior
      </button>
      <Links open={open} />
      <Burger open={open} handleBurger={handleBurger} />
    </nav>
  );
};
