import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
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
  open: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  "@media (max-width: 504px)": {
    links: {
      display: "none",
    },
    open: {
      display: "flex",
      margin: " auto",
      alignSelf: "center",
      height: "30vh",
      padding: "60% 0",
    },
  },
}));
