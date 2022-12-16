import { Box, Typography, Stack, styled } from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const NavDropCustomize = ({customize , setCustomize}) => {


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
            {customize && <Body sx={{gap:{laptopL:"100px" , laptop:"60px"}}} onMouseLeave={()=>setCustomize(false)} mt={4}>
                <Box >
                    <Typography>
                        Featured
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Nike By You New Releases</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box >
                    <Typography>
                        Nike By You
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Men</Typo>
                            <Typo>Women</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        By Sport
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Lifestyle</Typo>
                            <Typo>Football</Typo>
                            <Typo>BasketBall</Typo>
                            <Typo>Running</Typo>
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

export default NavDropCustomize