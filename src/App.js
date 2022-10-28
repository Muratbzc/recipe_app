import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  const style = {
    colors: {
      navbar: "rgb(227, 199, 112)",
      header: "rgb(254, 205, 112)",
      body: "rgb(243, 224, 181)",
      footer: "rgb(255, 174, 109)",
    },
    margins: {},
    responsive: "724px",
  };
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
