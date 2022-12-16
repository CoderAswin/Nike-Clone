import { Box, Button, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const GearUp = () => {
    const Img = styled("img")(({ theme }) => ({
        // height:{laptopL:"467.49px"},
        // width:{laptopL:"467.49px"}
    }))
    return (
        <>
            <Toolbar>
                <ThemeProvider theme={theme}>
                    <Box mt={10}>
                        <Box ml={3}>
                            <Typography variant='h5'>Gear Up</Typography>
                        </Box>
                        <Box ml={2}>
                            <Img sx={{ width: { laptopL: "1435.2px", laptop: "100%", tablet: "100%", mobileL: "100%", mobileM: "100%", mobileS: "100%" } }} src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1912,c_limit/c3a9bd9f-4a07-4565-b520-3f3373acf675/nike-just-do-it.png" alt="ImgOne" />
                        </Box>
                        <Box sx={{textAlign: { laptopL: "center", laptop: "center", tablet: "center", mobileL: "left", mobileM: "left", mobileS: "left" },
                        marginLeft:{mobileL:"20px" , mobileM:"20px" , mobileS:"20px"}
                    }} textAlign="center">
                            <Box>
                                <Typography sx={{ fontFamily: "fantasy", fontSize: { laptopL: "80px", laptop: "80px", tablet: "40px", mobileL: "20px", mobileM: "20px", mobileS: "20px" } }}>GET OUT & GO ALL IN</Typography>
                            </Box>
                            <Box >
                                <Typography>Remember: nothing notable ever happened in the comfort zone. That’s what our ACG Earthlings discovered on their adventure across Georgia, putting <br /> this season’s gear to test.</Typography>
                            </Box>
                            <Box >
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "#000000",
                                        borderRadius: "20px",
                                        marginTop: "15px",
                                        "&:hover": {
                                            backgroundColor: "#DDDDDD",
                                            color: "black",
                                        }
                                    }}>
                                    Shop
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Toolbar>
        </>
    )
}

export default GearUp