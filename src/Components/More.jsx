import { Box, Button, Toolbar, Typography , styled} from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const More = () => {
    const Img = styled("img")(({ theme }) => ({
        // height:{laptopL:"467.49px"},
        // width:{laptopL:"467.49px"}
    }))
    return (
        <>
            <Toolbar>
                <ThemeProvider theme={theme}>
                    <Box mt={10}>
                        <Box ml={2}>
                            <Typography variant='h5'>
                                More Nike
                            </Typography>
                        </Box>
                        <Box sx={{display:{laptopL:"flex" , laptop:"flex" , tablet:"block" , mobileL:"block" , mobileM:"block" , mobileS:"block"},
                        marginLeft:{laptopL:"0px", laptop:"0px" , tablet:"55px" }
                    }} gap="13px" ml={2} mt={2}>
                            <Box  position="relative">
                                <Img sx={{width:{laptopL:"467.49px" , laptop:"100%" , tablet:"100%" , mobileL:"100%" , mobileM:"100%" , mobileS:"100%"}}}  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/cb91797a-6054-4201-8bee-c08700c83e47/nike-just-do-it.png" alt="ImgOne" />
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "#F5F5F5",
                                        borderRadius: "20px",
                                        marginTop: "15px",
                                        position: "absolute",
                                        top: {laptopL:"80%" , laptop:"80%" , tablet:"80%" , mobileL:"80%" , mobileM:"80%" , mobileS:"75%"},
                                        left: "10%",
                                        color: "black"
                                        // "&:hover": {
                                        //     backgroundColor: "#DDDDDD",
                                        //     color: "black",

                                        // }
                                    }}>
                                    Mens's
                                </Button>
                            </Box>
                            <Box position="relative">
                                <Img sx={{width:{laptopL:"467.49px" , laptop:"100%" , tablet:"100%" , mobileL:"100%" , mobileM:"100%" , mobileS:"100%"}}}  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/b47f5049-1b86-4642-b50c-310ce59b5940/nike-just-do-it.png" alt="ImgTwo" />
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "#F5F5F5",
                                        borderRadius: "20px",
                                        marginTop: "15px",
                                        position: "absolute",
                                        top: {laptopL:"80%" , laptop:"80%" , tablet:"80%" , mobileL:"80%" , mobileM:"80%" , mobileS:"75%"},
                                        left: "10%",
                                        color: "black"
                                        // "&:hover": {
                                        //     backgroundColor: "#DDDDDD",
                                        //     color: "black",
                                        // }
                                    }}>
                                    Women's
                                </Button>
                            </Box>
                            <Box position="relative">
                                <Img sx={{width:{laptopL:"467.49px" , laptop:"100%" , tablet:"100%" , mobileL:"100%" , mobileM:"100%" , mobileS:"100%"}}}  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/44c84aa3-702f-49fd-80e0-a74258b9b0b6/nike-just-do-it.png" alt="ImgThree" />
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "#F5F5F5",
                                        borderRadius: "20px",
                                        marginTop: "15px",
                                        position: "absolute",
                                        top: {laptopL:"80%" , laptop:"80%" , tablet:"80%" , mobileL:"80%" , mobileM:"80%" , mobileS:"75%"},
                                        left: "10%",
                                        color: "black"
                                        // "&:hover": {
                                        //     backgroundColor: "#DDDDDD",
                                        //     color: "black",
                                        // }
                                    }}>
                                    Kid's
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Toolbar>
        </>
    )
}

export default More