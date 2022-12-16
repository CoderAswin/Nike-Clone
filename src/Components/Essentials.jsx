import { Box, Button, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const Essentials = () => {
    const Img = styled("img")(({ theme }) => ({
        // height:{laptopL:"467.49px"},
        // width:{laptopL:"467.49px"}
    }))
    return (
        <Toolbar>
            <Box ml={2} mt={10}>
                <Box >
                    <Typography variant='h5'>The Essentials</Typography>
                </Box>
                <ThemeProvider theme={theme}>
                    <Box sx={{ display: { laptopL: "flex", laptop: "flex", tablet: "flex", mobileL: "block" } }} mt={3} display="flex" gap="10px">
                        <div style={{ position: "relative" }}>
                            <Img sx={{
                                width: { laptopL: "706px", laptop: "100%", tablet: "100%", mobileL: "100%", mobileM: "100%", mobileS: "100%" },
                                height: { laptopL: "700px", laptop: "auto", tablet: "auto", mobileL: "auto", mobileM: "auto", mobileS: "auto" }
                            }} src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/9d04f520-9fab-417b-8a03-0a94c28f9e52/nike-just-do-it.png" alt="imageOne" />
                            <Box sx={{ position: "absolute", top: { laptopL: "80%", laptop: "75%", tablet: "70%", mobileL: "70%", mobileM: "57%", mobileS: "50%" }, left: "50px" }}>
                                <Typography color="white" variant="h5">Keep Running with Infinity</Typography>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: "20px",
                                        marginTop: "15px",
                                        color: "black",
                                        "&:hover": {
                                            backgroundColor: "#DDDDDD"

                                        }
                                        // padding:"10px"
                                    }}>
                                    Shop
                                </Button>
                            </Box>
                        </div>
                        <div style={{ position: "relative" }}>
                            {/* <ThemeProvider theme={theme}> */}
                            <Img sx={{
                                width: { laptopL: "706px", laptop: "100%", tablet: "100%", mobileL: "100%", mobileM: "100%", mobileS: "100%" },
                                height: { laptopL: "700px", laptop: "auto", tablet: "auto", mobileL: "auto", mobileM: "auto", mobileS: "auto" }
                            }} src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/ed131383-81f9-4bcd-8dbf-d1323835b844/nike-just-do-it.png" alt="imageTwo" />
                            {/* </ThemeProvider> */}
                            <Box sx={{ position: "absolute", top: { laptopL: "80%", laptop: "75%", tablet: "70%", mobileL: "70%", mobileM: "65%", mobileS: "60%" }, left: "50px" }}>
                                <Typography variant="h5">Varsity Vibes</Typography>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "#000000",
                                        borderRadius: "20px",
                                        marginTop: "15px",
                                        "&:hover": {
                                            backgroundColor: "#F5F5F5",
                                            color: "black"

                                        }
                                    }}>
                                    Shop
                                </Button>
                            </Box>
                        </div>
                    </Box>
                </ThemeProvider>
            </Box>
        </Toolbar>
    )
}

export default Essentials

{/* <img width="706" height="700" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_700,c_limit/1bb228fb-e295-4bb0-8b07-536f3e983f41/nike-just-do-it.png" alt="" /> */ }
                        // <img width="706" height="700" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_700,c_limit/b3be382f-2ea8-469a-b1c3-7bad9ed053db/nike-just-do-it.png" alt="" />