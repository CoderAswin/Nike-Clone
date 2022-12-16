import { SearchOutlined } from '@mui/icons-material'
import { Box, IconButton, OutlinedInput, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"


const SearchBar = ({search , setSearch}) => {
    return (
        <>
        <ThemeProvider theme={theme}>
            {search && <Box sx={{cursor:"pointer" , width:{laptopL:"100%" ,laptop:"100%" , tablet:"100%" , mobileL:"100%" , mobileM:"100%" , mobileS:"100%"}}} position="absolute"  zIndex="999999" backgroundColor="white" top="-1px" >
                <Toolbar>
                    <Box sx={{ flex: "3.5" }}>
                        <svg viewBox="0 0 24 24" width="60px" height="60px" >
                            <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </Box>
                    <Box sx={{ flex: "8" }} position="relative">
                        <OutlinedInput autoFocus placeholder='Search' sx={{
                            borderRadius: "18px",
                            height: "40px",
                            width: {laptopL:"600px" , laptop:"500px" , tablet:"350px" , mobileL:"200px" , mobileM:"180px" , mobileS:"150px"},
                            size: "150px",
                            padding: "0px 30px",
                            backgroundColor: "#F5F5F5",
                            "& fieldset": { border: 'none' },
                            "&:hover": {
                                backgroundColor: "#E5E5E5"
                            }
                        }} />
                        <IconButton sx={{ position: "absolute", left: "1px" }}>
                            <SearchOutlined />
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography onClick={()=>setSearch(false)}>Cancel</Typography>
                    </Box>
                </Toolbar>
                <Toolbar>
                    <Box mt={5}  sx={{marginLeft:{laptopL:"30%" , laptop:"30%" , tablet:"29%" , mobileL:"25%" , mobileM:"25%" , mobileS:"23%"}}} paddingBottom="30px">
                        <Typography color="#949494">Popular Search Terms</Typography>
                        <Box mt={2}>
                            <Stack spacing={1}>
                                <Typography fontSize="20px">Air Force 1</Typography>
                                <Typography fontSize="20px">Jordan</Typography>
                                <Typography fontSize="20px">Air Max</Typography>
                                <Typography fontSize="20px">Blazer</Typography>
                                <Typography fontSize="20px">Gifts</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Toolbar>
            </Box>}
            </ThemeProvider>
        </>
    )
}

export default SearchBar

// sx={{width:{laptopL:"100%" ,laptop:"100%" , tablet:"100%" , mobileL:"100%" , mobileM:"100%" , mobileS:"100%"}}}