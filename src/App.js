import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import GlobalRouter from "./router/GlobalRouter";

function App() {
  const style = {
    colors: {
      navbar: "rgb(205, 240, 234)",
      header: "rgb(254, 205, 112)",
      body: "rgb(247, 245, 242)",
      var1: "#782701",
      var2: " rgb(236, 197, 251)",
      var3: " rgb(240, 255, 194)",
      var4: " rgb(255, 187, 187)",
    },
    margins: {},
    responsive: { lg: "1150px", md: "900px", sm: "670px", xsm: "450px" },
  };
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <GlobalRouter />
    </ThemeProvider>
  );
}

export default App;
