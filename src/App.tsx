import React, { useState } from "react";
import { Nav } from "./comps/nav/Nav";
import { ThemeProvider } from "react-jss";
import { theme } from "./theme";
import clsx from "clsx";
import { useStyles } from "./styles";

function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleBurger = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={clsx(classes.root, open && classes.navOpen)}>
          <Nav open={open} handleBurger={handleBurger} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
