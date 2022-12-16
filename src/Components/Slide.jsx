import { Box } from '@mui/material'
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"


const Slide = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#F5F5F5", padding: "20px", fontFamily: "fantasy" }} textAlign="center">
        <AutoPlaySwipeableViews>
          <Box sx={{marginRight:{laptopL:"0px",laptop:"80px"}}}>Students Now Get 10% Off</Box>
          <Box sx={{marginRight:{laptop:"80px",laptop:"80px"}}}>10% Off Your First Order</Box>
          <Box sx={{marginRight:{laptop:"70px",laptop:"80px"}}}>Free Standard Delivery & 30-Day Free Returns</Box>
          <Box sx={{marginRight:{laptop:"80px",laptop:"80px"}}}>Save Upto 40 % Off</Box>
        </AutoPlaySwipeableViews>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default Slide