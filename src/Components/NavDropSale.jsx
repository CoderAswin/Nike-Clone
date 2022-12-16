import { Box, Typography, Stack, styled } from '@mui/material'
import React from 'react'

const NavDropSale = ({sale , setSale}) => {


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
            {sale && <Body onMouseLeave={()=>setSale(false)} mt={4}>
                <Box >
                    <Typography>
                        Featured
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Shop All Sale</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box >
                    <Typography>
                        Men's Sale
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Shoes</Typo>
                            <Typo>Clothing</Typo>
                            <Typo>Accessories & Equipment</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        Women's Sale
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Shoes</Typo>
                            <Typo>Clothing</Typo>
                            <Typo>Accessories & Equipment</Typo>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        Kid's Sale
                    </Typography>
                    <Box>
                        <Stack spacing={1}>
                            <Typo>Shoes</Typo>
                            <Typo>Clothing</Typo>
                            <Typo>Accessories & Equipment</Typo>
                        </Stack>
                    </Box>
                </Box>
            </Body>}
        </>
    )
}

export default NavDropSale