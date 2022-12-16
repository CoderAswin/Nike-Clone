import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    breakpoints: {
      values: {
        mobileS: 320,
        mobileM: 375,
        mobileL: 425,
        tablet: 768,
        laptop: 1024,
        laptopL: 1440,
      },
    },
  });

export default theme