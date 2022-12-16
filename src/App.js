import { Box } from "@mui/material";
import Essentials from "./Components/Essentials";
import FooterOne from "./Components/FooterOne";
import FooterTwo from "./Components/FooterTwo";
import GearUp from "./Components/GearUp";
import Men from "./Components/Men";
import More from "./Components/More";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Slide from "./Components/Slide";
import TopBar from "./Components/TopBar";
import Trailer from "./Components/Trailer";
import "./App.css"
import Top from "./Pages/PageOne/Top";
import Filter from "./Pages/PageOne/Filter";
import Gallery from "./Pages/PageTwo/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles"




// export const theme = createTheme({
//   breakpoints: {
//     values: {
//       mobileS: 320,
//       mobileM: 375,
//       mobileL: 425,
//       tablet: 768,
//       laptop: 1024,
//       laptopL: 1440,
//     },
//   },
// });


function App() {
  return (

    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <TopBar />
              <Navbar />
              <Slide />
              <Men />
              <Showcase />
              <Trailer />
              <Essentials />
              <GearUp />
              <More />
              <FooterOne />
              <FooterTwo />
            </>
          }></Route>

          <Route path="/all_shoes_men" element={<>
            <TopBar />
            <Navbar />
            <Top />
            {/* <Filter /> */}
            <FooterTwo />
          </>} ></Route>



          <Route path="/items/:id" element={<>
            <TopBar />
            <Navbar />
            <Gallery />
            <FooterTwo />
          </>} ></Route>


        </Routes>
      </BrowserRouter>
    </Box >
  );
}

export default App;
