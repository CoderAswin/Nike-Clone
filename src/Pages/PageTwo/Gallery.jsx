import Details from './Details'
import { Box, Toolbar, styled } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import allShoeApi from '../../Api/shoes'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../../theme"

const Gallery = () => {

  const { id } = useParams()

  const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.only('laptopL')]: {
      width: "434px",
    },
    [theme.breakpoints.only('laptop')]: {
      width: "226px",
    },
    [theme.breakpoints.only('sm')]: {
      width: "730px",
    },
    [theme.breakpoints.only('xs')]: {
      width: "400px",
    },
  }))

  const Video = styled('video')(({ theme }) => ({
    [theme.breakpoints.only('laptopL')]: {
      width: "434px",
    },
    [theme.breakpoints.only('laptop')]: {
      width: "226px",
    },
    [theme.breakpoints.only('sm')]: {
      width: "730px",
    },
    [theme.breakpoints.only('xs')]: {
      width: "400px",
    },
  }))

  const { images: { imgOne, imgTwo, imgThree, imgFour }, colors,
    gallery: { One, two, three, four, five, six, seven, eight, nine, ten },
    offer, price, shoeName } =
    allShoeApi.find((shoe) => shoe.id == id)




  return (
    <Toolbar>
      <ThemeProvider theme={theme}>
        <Stack direction={{ laptopL: "row", laptop: "row", tablet: "column-reverse" , mobileL:"column-reverse" , mobileM:"column-reverse" , mobileS:"column-reverse"}} spacing={10}>
          <Box mt={12} sx={{ display: { laptopL: "grid", laptop: "grid", tablet: "none", mobileL: "none" , mobileM:"none" , mobileS:"none"}, gridTemplateColumns: { laptopL: "repeat(2 , 434px)", laptop: "repeat(2 , 226px)" }, rowGap: {laptopL:"10px" , laptop:"10px"}, columnGap: {laptopL:"10px" , laptop:"10px"}, marginLeft: { lg: "20px", laptop: "20px" } }}>
            <Img src={One} alt="" />
            <Video controls autoPlay>
              <source src={two} />
            </Video>
            <Img src={three} alt="" />
            <Img src={four} alt="" />
            <Img src={five} alt="" />
            <Img src={six} alt="" />
            <Img src={seven} alt="" />
            <Img src={eight} alt="" />
            <Img src={nine} alt="" />
            <Img src={ten} alt="" />
          </Box>
          <Box >
            <Details One={One} two={two} three={three} four={four} five={five}
              six={six} seven={seven} eight={eight} nine={nine} ten={ten}
              price={price} shoeName={shoeName} imgOne={imgOne} imgTwo={imgTwo}
              imgThree={imgThree} imgFour={imgFour} />
          </Box>
        </Stack>
      </ThemeProvider>
    </Toolbar>
  )
}

export default Gallery

//sx={{width:{lg:"434px",md:"226px", sm:"730px"}}}