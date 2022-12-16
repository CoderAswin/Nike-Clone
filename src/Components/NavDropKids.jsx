import { Box, Typography, Stack, styled } from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const NavDropKids = ({kids , setKids}) => {


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
            {kids && <Body sx={{gap:{laptopL:"70px" , laptop:"30px"}}} onMouseLeave={()=>setKids(false)} mt={4}>
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
                    Boys' Shoes
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Older Kids (3–6.5)</Typo>
                            <Typo>Younger Kids (10–2.5)</Typo>
                            <Typo>Baby and Toddler (1.5–9.5)</Typo>
                            <Typo>Lifestyle</Typo>
                            <Typo>Lifestyle</Typo>
                            <Typo>Running</Typo>
                            <Typo>Basketball</Typo>
                            <Typo>Football</Typo>
                            <Typo>Jordan</Typo>
                            <Typo>Sandals and Slides</Typo>
                            <Typo>All Shoes</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        Girl's Shoes
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Older Kids (3–6.5)</Typo>
                            <Typo>Younger Kids (10–2.5)</Typo>
                            <Typo>Baby and Toddler (1.5–9.5)</Typo>
                            <Typo>Lifestyle</Typo>
                            <Typo>Lifestyle</Typo>
                            <Typo>Running</Typo>
                            <Typo>Basketball</Typo>
                            <Typo>Football</Typo>
                            <Typo>Sandals and Slides</Typo>
                            <Typo>All Shoes</Typo>
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

export default NavDropKids