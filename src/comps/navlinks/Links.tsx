import React from "react";
import { useStyles } from "./styles";
import { Props } from "./types";
import clsx from "clsx";

export const Links: React.FC<Props> = ({ open }) => {
  const classes = useStyles();

  return (
    <ul className={clsx(classes.links, open && classes.open)}>
      <li className={classes.link}>home</li>
      <li className={classes.link}>collection</li>
      <li className={classes.link}>about</li>
      <li className={classes.link}>contant</li>
    </ul>
  );
};
