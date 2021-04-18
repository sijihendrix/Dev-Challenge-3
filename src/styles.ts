import { createUseStyles } from "react-jss";
import { Theme } from "./types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    // background: theme.background,
    background: "#181719",
    width: "100%",
  },

  navOpen: {
    height: "100vh",
  },
}));
