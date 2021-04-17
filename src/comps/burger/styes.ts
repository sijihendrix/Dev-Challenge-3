import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    top: "5%",
    left: "2rem",
    display: "none",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "2rem",
    height: "3rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0",
    zIndex: "10",
  },
  span: {
    width: "4rem",
    height: "0.25rem",
    background: "white",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "3.5px",
    right: "2rem",
    top: "0.5rem",
  },
  span1: {
    transform: "rotate(45deg)",
  },
  span2: {
    opacity: "0",
    transform: "translateX(20px)",
  },
  span3: {
    transform: "rotate(-45deg)",
  },
  "@media (max-width: 504px)": {
    root: {
      display: "flex",
    },
  },
});
