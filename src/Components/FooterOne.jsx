import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { mouseOver, mouseOut } from '../Redux/Reducer/reducer';
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"


const FooterOne = () => {

    const Typo = styled(Typography)(({ theme }) => ({
        "&:hover": {
            color: "black",
            cursor: "pointer"
        }
    }))

    const dispatch = useDispatch()

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box onMouseOver={() => dispatch(mouseOver())} onMouseOut={() => dispatch(mouseOut())}
                    position="absolute" marginLeft="270px" display="flex"  mt={10}
                    sx={{ marginLeft: { laptopL: "270px", laptop: "130px" , tablet:"30px" , mobileL:"30px" , mobileM:"30px" , mobileS:"30px"} , 
                    gap:{laptopL:"120px" , laptop:"70px" , tablet:"40px"},
                    display:{laptopL:"flex" , laptop:"flex" , tablet:"flex" , mobileL:"block" , mobileM:"block" , mobileS:"block"}
                 }}
                >
                    <Box>
                        <Stack direction="column" spacing={3}>
                            <Typography>Icons</Typography>
                            <Box sx={{ color: "#717171" }}>
                                <Stack sx={{display:{laptopL:"block", laptop:"block" , tablet:"block" ,mobileL:"none", mobileM:"none" , mobileS:"none"}}} direction="column" spacing={2}>
                                    <Typo>Air Force 1</Typo>
                                    <Typo>Huarache</Typo>
                                    <Typo>Air Max 90</Typo>
                                    <Typo>Air Max 95</Typo>
                                    <Typo>Air Max 97</Typo>
                                    <Typo>Air Max 270</Typo>
                                    <Typo>Air Max 720</Typo>
                                    <Typo>All Air Max</Typo>
                                    <Typo>Vapormax</Typo>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="column" spacing={3}>
                            <Typography>Shoes</Typography>
                            <Box style={{ color: "#717171" }}>
                                <Stack sx={{display:{laptopL:"block", laptop:"block" , tablet:"block" ,mobileL:"none", mobileM:"none" , mobileS:"none"}}} direction="column" spacing={2}>
                                    <Typo>All Shoes</Typo>
                                    <Typo>Custom Shoes</Typo>
                                    <Typo>Jordan Shoes</Typo>
                                    <Typo>Running Shoes</Typo>
                                    <Typo>Basketball Shoes</Typo>
                                    <Typo>Football Shoes</Typo>
                                    <Typo>Gym & Training Shoes</Typo>
                                    <Typo>Lifestyle Shoes</Typo>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="column" spacing={3}>
                            <Typography>Clothing</Typography>
                            <Box sx={{display:{laptopL:"block", laptop:"block" , tablet:"block" ,mobileL:"none", mobileM:"none" , mobileS:"none"}}} style={{ color: "#717171"}}>
                                <Stack direction="column" spacing={2}>
                                    <Typo >All Clothing</Typo>
                                    <Typo>Modest Wear</Typo>
                                    <Typo>Hoodies & Pullovers</Typo>
                                    <Typo>Shirts & Tops</Typo>
                                    <Typo>Jackets</Typo>
                                    <Typo>Compression & Nike Pro</Typo>
                                    <Typo>Trousers & Leggings</Typo>
                                    <Typo>Shorts</Typo>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack  sx={{marginTop:{laptopL:"0px", laptop:"0px" , tablet:"0px" ,mobileL:"20px" , mobileM:"20px" , mobileS:"20px"}}} direction="column" spacing={3}>
                            <Typography>Kids'</Typography>
                            <Box sx={{display:{laptopL:"block", laptop:"block" , tablet:"block" ,mobileL:"none" , mobileM:"none" , mobileS:"none"}}} style={{ color: "#717171"}}>
                                <Stack direction="column" spacing={2}>
                                    <Typo>Infant & Toddler Shoes</Typo>
                                    <Typo>Kids' Shoes</Typo>
                                    <Typo>Kids' Jordan Shoes</Typo>
                                    <Typo>Kids' Basketball Shoes</Typo>
                                    <Typo>Kids' Running Shoes</Typo>
                                    <Typo>Kids' Clothing</Typo>
                                    <Typo>Kids' Backpacks</Typo>
                                    <Typo>Kids' Socks</Typo>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default FooterOne