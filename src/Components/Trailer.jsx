import { Box, Stack, Toolbar, Typography, styled, Button } from '@mui/material'
import React from 'react'
import trailer from "../Assets/Trailer.mp4"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const Trailer = () => {

    const Video = styled("video")(({ theme }) => ({
        // [theme.breakpoints.up("md")]: {
        //     width: "100%",
        //     height: "auto"
        // },

        // [theme.breakpoints.up("lg")]: {
        //     width: "1423.2px",
        //     height: "800.54px"
        // },

        // [theme.breakpoints.down("sm")]: {
        //     width: "100%",
        //     height: "auto"
        // },

    }))


    return (
        <Box display="flex" justifyContent="center">
            <Toolbar>
                <Stack spacing={8}>
                    <Box mt={10}>
                        <Typography variant='h5' mb={3}>Featured</Typography>
                        <ThemeProvider theme={theme}>
                            <Video sx={{ width: { laptopL: "1360px", laptop: "100%", tablet: "100%", mobileL: "100%", mobileM: "100%", mobileS: "100%" } }} controls poster='https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/704af0a7-9969-40b5-871b-70170b58613f/image.jpg' src={trailer}></Video>
                        </ThemeProvider>
                    </Box>
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Stack spacing={2}>
                                <Box sx={{ textAlign: { laptopL: "center", laptop: "center", tablet: "left", mobileL: "left", mobileM: "left", mobileS: "left" }}}>
                                    <Typography sx={{ lineHeight: {laptopL: "1px", laptop: "1px", tablet: "20px", mobileL: "20px", mobileM: "20px", mobileS: "20px"} }}>Nike FC Presents</Typography>
                                    <Typography variant='h2' sx={{ fontFamily: "fantasy",  fontSize: {laptopL: "80px", laptop: "80px", tablet: "40px", mobileL: "40px", mobileM: "40px", mobileS: "40px"}, }}>THE FOOTBALLVERSE</Typography>
                                </Box>
                                <Box sx={{ textAlign: { laptopL: "center", laptop: "center", tablet: "left", mobileL: "left", mobileM: "left", mobileS: "left" } }}>
                                    <Typography>
                                        At a secret lab, a scientific debate erupts…who is the better player?! A multiverse is created to settle the score, but the experiment gets out of hand when many legendary players join in the fun.<br /> Watch the full film on Nov 16. Meanwhile, discover the latest from Nike FC in the Nike app.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    justifyContent: { laptopL: "center", laptop: "center", tablet: "flex-start", mobileM: "flex-start", mobileL: "flex-start", mobileS: "flex-start" },
                                    display: { laptopL: "flex", laptop: "flex", tablet: "flex", mobileM: "flex", mobileL: "flex", mobileS: "block" },
                                    gap: { laptopL: "8px", laptop: "8px", tablet: "8px", mobileM: "8px", mobileL: "8px" }
                                }}>
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            backgroundColor: "#000000",
                                            borderRadius: "20px"
                                        }}>
                                        Download the Nike App
                                    </Button>
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            backgroundColor: "#000000",
                                            borderRadius: "20px",
                                            marginTop:{laptopL:"0px",laptop: "0px", tablet: "0px", mobileM: "0px", mobileL: "0px" , mobileS:"15px"}
                                        }}>
                                        Shop
                                    </Button>
                                </Box>
                            </Stack>
                        </ThemeProvider>
                    </Box>
                </Stack>
            </Toolbar>
        </Box>

    )
}

export default Trailer

// width="1423.2px" height="800.54px"