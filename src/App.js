import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import Details from "./pages/details/Details";

function App() {
  const style = {
    colors: {
      navbar: "rgb(205, 240, 234)",
      header: "rgb(254, 205, 112)",
      body: "rgb(247, 245, 242)",
      var1: "#782701",
      var2: " rgb(133, 8, 182)",
    },
    margins: {},
    responsive: { lg: "1150px", md: "900px", sm: "670px", xsm: "450px" },
  };
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
