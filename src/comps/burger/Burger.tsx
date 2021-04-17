import React from "react";
import { useStyles } from "./styes";
import clsx from "clsx";
import { Props } from "./types";

export const Burger: React.FC<Props> = ({ open, handleBurger }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <button className={classes.root} onClick={() => handleBurger()}>
        <span className={clsx(classes.span, open && classes.span1)}></span>
        <span className={clsx(classes.span, open && classes.span2)}></span>
        <span className={clsx(classes.span, open && classes.span3)}></span>
      </button>
    </React.Fragment>
  );
};
