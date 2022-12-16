import { Facebook, Instagram, LocationOn, Twitter, YouTube } from '@mui/icons-material'
import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBoolean } from '../Redux/Reducer/reducer'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const FooterTwo = () => {

  const Typo = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontFamily: "fantasy",
    color: "#FFFFF0",
    cursor: "pointer"
  }))

  const SmallTypo = styled(Typography)(({ theme }) => ({
    color: "#717171", fontSize: "12px", fontFamily: "fantasy",
    "&:hover": {
      color: "#FFFFF0",
      cursor: "pointer"
    }
  }))

  const Footer = styled(Box)(({ theme }) => ({
    backgroundColor: "#111111", width: "100%", display: "flex",
    justifyContent: "space-between", alignItems: "flex-start"
  }))

  const Main = styled(Box)(({ theme }) => ({
    display: "flex", gap: "90px", padding: "50px"
  }))

  const SocialMedia = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "15px",
    margin: "40px 90px"
  }))

  const Icons = styled(Box)(({ theme }) => ({
    color:"white",
    "&:hover": {
      color:"white",
      cursor:"pointer"
    }

  }))

  const boolean = useSelector(selectBoolean)
  return (
    <>
      <ThemeProvider theme={theme}>
        {boolean == false ?
          <Box position="relative" top="290px" sx={{
            transitionProperty: "top",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in",
            transitionDelay: "0.3s",

          }}>
            <Footer>
              <Main sx={{ display: { laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "block", mobileM: "block", mobileS: "block" }, gap: { laptopL: "90px", laptop: "90px", tablet: "40px" } }}>
                <Box >
                  <Stack spacing={2}>
                    <Typo>FIND A STORE</Typo>
                    <Typo>BECOME A MEMBER</Typo>
                    <Typo>SIGN UP FOR EMAIL</Typo>
                    <Typo>SEND US FEEDBACK</Typo>
                    <Typo>STUDENT DISCOUNTS</Typo>
                  </Stack>
                </Box>
                <Box>
                  <Stack sx={{ display: { laptopL: "block", laptop: "block", tablet: "block", mobileL: "none", mobileM: "none", mobileS: "none" } }} spacing={2}>
                    <Typo>GET HELP</Typo>
                    <SmallTypo>Order Status</SmallTypo>
                    <SmallTypo>Delivery</SmallTypo>
                    <SmallTypo>Returns</SmallTypo>
                    <SmallTypo>Payment Options</SmallTypo>
                    <SmallTypo>Contact Us On Nike.com Inquiries</SmallTypo>
                    <SmallTypo>Contact Us On All Other Inquiries</SmallTypo>
                  </Stack>
                </Box>
                <Box>
                  <Stack sx={{ display: { laptopL: "block", laptop: "block", tablet: "block", mobileL: "none", mobileM: "none", mobileS: "none" } }} spacing={2}>
                    <Typo color="#FFFFF0" fontSize="12px" fontFamily="fantasy">FIND A STORE</Typo>
                    <SmallTypo>News</SmallTypo>
                    <SmallTypo>Careers</SmallTypo>
                    <SmallTypo>Investors</SmallTypo>
                    <SmallTypo>Sustainability</SmallTypo>
                  </Stack>
                </Box>
              </Main>

              <SocialMedia sx={{display:{laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "block", mobileM: "block", mobileS: "block"}}}>
                <Icons>
                  <Twitter />
                </Icons>
                <Icons sx={{marginTop:{laptopL: "0px", laptop: "0px", tablet: "0px",mobileL:"10px" , mobileM:"10px" , mobileS:"10px"}}}>
                  <Facebook />
                </Icons>
                <Icons sx={{marginTop:{laptopL: "0px", laptop: "0px", tablet: "0px",mobileL:"10px" , mobileM:"10px" , mobileS:"10px"}}}>
                  <YouTube />
                </Icons>
                <Icons sx={{marginTop:{laptopL: "0px", laptop: "0px", tablet: "0px",mobileL:"10px" , mobileM:"10px" , mobileS:"10px"}}}>
                  <Instagram />
                </Icons>
              </SocialMedia>
            </Footer>

            <Box sx={{ display: { laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "flex", mobileM: "flex", mobileS: "flex" }, flexDirection: { laptopL: "row", laptop: "row", tablet: "row", mobileL: "column", mobileM: "column", mobileS: "column" } }} backgroundColor="#111111" justifyContent="space-between" alignItems="center">
              <Box color="white" display="flex" gap="10px" margin="20px">
                <LocationOn sx={{ fontSize: "17px" }} />
                <Typography fontSize="12px">India</Typography>
                <SmallTypo>&copy;  2022 Nike, Inc. All Rights Reserved</SmallTypo>
              </Box>
              <Box color="white" display="flex" gap="15px" margin="20px">
                <SmallTypo>Guides</SmallTypo>
                <SmallTypo>Terms of Sale</SmallTypo>
                <SmallTypo>Terms of Use</SmallTypo>
                <SmallTypo>Nike Privacy Policy</SmallTypo>
              </Box>
            </Box>
          </Box>

          :

          <Box position="relative" top="600px" sx={{
            transitionProperty: "top",
            transitionDuration: "0.2s",
            transitionTimingFunction: "linear",
            transitionDelay: "0.3s"
          }} >
            <Footer >
              <Main sx={{ display: { laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "block", mobileM: "block", mobileS: "block" }, gap: { laptopL: "90px", laptop: "90px", tablet: "40px" } }}>
                <Box >
                  <Stack spacing={2}>
                    <Typo>FIND A STORE</Typo>
                    <Typo>BECOME A MEMBER</Typo>
                    <Typo>SIGN UP FOR EMAIL</Typo>
                    <Typo>SEND US FEEDBACK</Typo>
                    <Typo>STUDENT DISCOUNTS</Typo>
                  </Stack>
                </Box>
                <Box>
                  <Stack sx={{ display: { laptopL: "block", laptop: "block", tablet: "block", mobileL: "none", mobileM: "none", mobileS: "none" } }} spacing={2}>
                    <Typo>GET HELP</Typo>
                    <SmallTypo>Order Status</SmallTypo>
                    <SmallTypo>Delivery</SmallTypo>
                    <SmallTypo>Returns</SmallTypo>
                    <SmallTypo>Payment Options</SmallTypo>
                    <SmallTypo>Contact Us On Nike.com Inquiries</SmallTypo>
                    <SmallTypo>Contact Us On All Other Inquiries</SmallTypo>
                  </Stack>
                </Box>
                <Box>
                  <Stack sx={{ display: { laptopL: "block", laptop: "block", tablet: "block", mobileL: "none", mobileM: "none", mobileS: "none" } }} spacing={2}>
                    <Typo color="#FFFFF0" fontSize="12px" fontFamily="fantasy">FIND A STORE</Typo>
                    <SmallTypo>News</SmallTypo>
                    <SmallTypo>Careers</SmallTypo>
                    <SmallTypo>Investors</SmallTypo>
                    <SmallTypo>Sustainability</SmallTypo>
                  </Stack>
                </Box>
              </Main>

              <SocialMedia sx={{display:{laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "block", mobileM: "block", mobileS: "block"}}}>
                <Icons>
                  <Twitter />
                </Icons>
                <Icons sx={{marginTop:{laptopL: "0px", laptop: "0px", tablet: "0px",mobileL:"10px" , mobileM:"10px" , mobileS:"10px"}}}>
                  <Facebook />
                </Icons>
                <Icons sx={{marginTop:{laptopL: "0px", laptop: "0px", tablet: "0px",mobileL:"10px" , mobileM:"10px" , mobileS:"10px"}}}>
                  <YouTube />
                </Icons>
                <Icons sx={{marginTop:{laptopL: "0px", laptop: "0px", tablet: "0px",mobileL:"10px" , mobileM:"10px" , mobileS:"10px"}}}>
                  <Instagram />
                </Icons>
              </SocialMedia>
            </Footer>

            <Box sx={{ display: { laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "flex", mobileM: "flex", mobileS: "flex" }, flexDirection: { laptopL: "row", laptop: "row", tablet: "row", mobileL: "column", mobileM: "column", mobileS: "column" } }} backgroundColor="#111111" justifyContent="space-between" alignItems="center">
              <Box color="white" display="flex" gap="10px" margin="20px">
                <LocationOn sx={{ fontSize: "17px" }} />
                <Typography fontSize="12px">India</Typography>
                <SmallTypo>&copy;  2022 Nike, Inc. All Rights Reserved</SmallTypo>
              </Box>
              <Box color="white" display="flex" gap="15px" margin="20px">
                <SmallTypo>Guides</SmallTypo>
                <SmallTypo>Terms of Sale</SmallTypo>
                <SmallTypo>Terms of Use</SmallTypo>
                <SmallTypo>Nike Privacy Policy</SmallTypo>
              </Box>
            </Box>
          </Box>
        }
      </ThemeProvider>
    </>


  )
}

export default FooterTwo