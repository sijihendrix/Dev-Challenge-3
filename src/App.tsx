import React, { useState } from "react";
import { Nav } from "./comps/nav/Nav";
import { ThemeProvider } from "react-jss";
import { theme } from "./theme";

function App() {
  const [open, setOpen] = useState(false);

  const handleBurger = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ background: theme.background }}>
          <Nav open={open} handleBurger={handleBurger} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
