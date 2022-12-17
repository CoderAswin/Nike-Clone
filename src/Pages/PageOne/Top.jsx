import { ExpandMore, Sort } from '@mui/icons-material'
import { Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Filter from './Filter'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../../theme"

const Top = () => {
    const [filter, setFilter] = useState(true)
    const [sort, setSort] = useState(false)
    return (
        <>

            <Toolbar>
                <ThemeProvider theme={theme}>
                    <Stack mt={11} direction="row" spacing={{ laptopL: 110, laptop:60 ,tablet: 37, sm: 35, xs: 10, mobileM: 5 , mobileS:4}}>
                        <Box>
                            <Typography variant='h5'>Mens Shoes(427)</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box mr={{ laptopL: 5, laptop: 4, tablet: 3, xs: 4, mobileM: 2 , mobileS:1}} onClick={() => setFilter(!filter)} display="flex" alignItems="center">
                                <Typography sx={{fontSize:{laptopL:"18px" , laptop:"18px", tablet:"15px", mobileL:"13px" , mobileM:"13px" ,mobileS:"10px"}}} >{filter ? "Hide Filters" : "Show Filters"}</Typography>
                                <IconButton>
                                    <Sort />
                                </IconButton>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography sx={{fontSize:{laptopL:"18px" , laptop:"18px", tablet:"15px", mobileL:"13px" , mobileM:"13px" ,mobileS:"10px"}}}>Sort By</Typography>
                                <IconButton onClick={() => setSort(!sort)}>
                                    <ExpandMore />
                                </IconButton>
                            </Box>
                            {sort && <Stack spacing={1} sx={{ position: "absolute", right: { laptopL: "45px", laptop: "60px", tablet: "37px" , mobileL:"25px" , mobileM:"15px"}, top: {laptopL:"130px" , laptop:"130px" , tablet:"130px" , mobileL:"140px" , mobileM:"170px" , mobileS:"160px"}, zIndex: "9999", textAlign: "right", backgroundColor: "#FFFFFF", padding: "25px", borderRadius: "10px", cursor: "pointer" }}>
                                <Typography sx={{ "&:hover": { color: "#716F75" } }}>Featured</Typography>
                                <Typography sx={{ "&:hover": { color: "#716F75" } }}>Newest</Typography>
                                <Typography sx={{ "&:hover": { color: "#716F75" } }}>Price: High-Low</Typography>
                                <Typography sx={{ "&:hover": { color: "#716F75" } }}>Price: Low-High</Typography>
                            </Stack>}
                        </Box>
                    </Stack>
                </ThemeProvider>
            </Toolbar>
            <Filter filter={filter} />

        </>
    )
}

export default Top

//sx={{ position: "absolute", right: {lg:"95px" , md:"45px"}, top: "145px", display: { md: "flex", sm: "none", xs: "none" }, gap: "40px", alignItems: "center" }}

{/* <>
            <Toolbar>
                <Stack mt={11}  direction="row" spacing={{lg:120 , md:65 , sm:35 , xs:10}}>
                    <Box>
                        <Typography variant='h5'>Mens Shoes(427)</Typography>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Box mr={{lg:6 , md:5 , sm:3 , xs:4}} onClick={()=>setFilter(!filter)} display="flex" alignItems="center">
                            <Typography >{filter ?"Hide Filters" : "Show Filters"}</Typography>
                            <IconButton>
                                <Sort />
                            </IconButton>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography>Sort By</Typography>
                            <IconButton onClick={()=>setSort(!sort)}>
                                <ExpandMore />
                            </IconButton>
                        </Box>
                        {sort && <Stack spacing={1} sx={{position:"absolute" , right:{lg:"90px" , md:"90px" , sm:"65px"} , top:"130px"  , zIndex:"9999" , textAlign:"right" , backgroundColor:"#FFFFFF" , padding:"25px" , borderRadius:"10px" , cursor:"pointer"}}>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Featured</Typography>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Newest</Typography>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Price: High-Low</Typography>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Price: Low-High</Typography>
                        </Stack>}
                    </Box>
                </Stack>
            </Toolbar>
            <Filter filter={filter}/>
        </> */}