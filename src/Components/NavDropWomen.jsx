import { Box, Typography, Stack, styled } from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const NavDropWomen = ({women , setWomen}) => {


    const Body = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: "70px",
        position: "absolute",
        zIndex:"-1",
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: "40px",
        paddingTop:"30px",
        cursor: "pointer"
    }))

    const Typo = styled(Typography)(({theme})=>({
        fontSize:"15px",
        color:"#717171",
        "&:hover":{
            color:"#393532"
        }
    }))

    
    return (
        <>
        <ThemeProvider theme={theme}>
            {women && <Body sx={{gap:{laptopL:"70px" , laptop:"30px"}}} onMouseLeave={()=>setWomen(false)} mt={4}>
                <Box >
                    <Typography>
                        New & Featured
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>New Releases</Typo>
                            <Typo>SNKRS Launch Calendar</Typo>
                            <Typo>Member Access</Typo>
                            <Typo>Air Force 1</Typo>
                            <Typo>Basic Essentials</Typo>
                            <Typo>Football Club Kits</Typo>
                            <Typo>Sustainable Materials</Typo>
                            <Typo>Top Picks Under ₹ 7 500.00</Typo>
                            <Typo>Sale</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box >
                    <Typography>
                        Shoes
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Newest Sneakers</Typo>
                            <Typo>SNKRS Launch Calendar</Typo>
                            <Typo>All Shoes</Typo>
                            <Typo>Lifestyle</Typo>
                            <Typo>Running</Typo>
                            <Typo>Basketball</Typo>
                            <Typo>Jordan</Typo>
                            <Typo>Football</Typo>
                            <Typo>Gym and Training</Typo>
                            <Typo>Skateboarding</Typo>
                            <Typo>Tennis</Typo>
                            <Typo>Sandals and Slides</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        Clothing
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>All Clothing</Typo>
                            <Typo>Performance Essentials</Typo>
                            <Typo>Sports Bras</Typo>
                            <Typo>Gym & Training</Typo>
                            <Typo>Tops & T-shirts</Typo>
                            <Typo>Hoodies and Sweatshirts</Typo>
                            <Typo>Jackets and Gilets</Typo>
                            <Typo>Pants and Leggings</Typo>
                            <Typo>Tracksuits</Typo>
                            <Typo>Compression and Base Layer</Typo>
                            <Typo>Shorts</Typo>
                            <Typo>Skirts and Dresses</Typo>
                            <Typo>Jerseys and Kits</Typo>
                            <Typo>Modest Wear</Typo>
                            <Typo>Plus size</Typo>
                            <Typo>Caps</Typo>
                            <Typo>Socks</Typo>
                            <Typo>Bags and Backpacks</Typo>
                            <Typo>Accessories and Equipment</Typo>
                            <Typo>All Sale Clothing</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        Shop By Sport
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>All Clothing</Typo>
                            <Typo>Tops and T-Shirts</Typo>
                            <Typo>Jerseys and Kits</Typo>
                            <Typo>Hoodies and Sweatshirts</Typo>
                            <Typo>Jackets and Gilets</Typo>
                            <Typo>Pants and Leggings</Typo>
                            <Typo>Compression and Base Layer</Typo>
                            <Typo>Shorts</Typo>
                            <Typo>Caps</Typo>
                            <Typo>Socks</Typo>
                            <Typo>Bags and Backpacks</Typo>
                            <Typo>Accessories and Equipment</Typo>
                            <Typo>All Sale Clothing</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        Icons
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Air Force 1</Typo>
                            <Typo>Pegasus</Typo>
                            <Typo>Blazer</Typo>
                            <Typo>Air Jordan 1</Typo>
                            <Typo>Air Max</Typo>
                        </Stack>
                    </Box>
                </Box>
            </Body>}
            </ThemeProvider>
        </>
    )
}

export default NavDropWomen



