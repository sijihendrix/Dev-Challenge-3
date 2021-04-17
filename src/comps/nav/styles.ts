import { createUseStyles } from "react-jss";
import { Theme } from "./types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.background,
    display: "flex",
    justifyContent: "space-between",
    padding: "2em",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  interior: {
    textTransform: "uppercase",
    backgroundColor: theme.background,
    color: "#fff",
    textAlign: "center",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "2rem",
    fontFamily: "'Crimson Pro', serif",
    border: "1px solid #fff",
    height: "40px",
    fontWeight: "900",
  },
  links: {
    margin: "0",
    listStyleType: "none",
    padding: "0",
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    alignItems: "center",
    fontSize: "2.5rem",
    textTransform: "uppercase",
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      background: "transparent",
      borderWidth: "1px",
      borderBottomStyle: "solid",
    },
  },

  "@media (max-width: 504px)": {
    links: {
      display: "none",
    },
  },
}));
