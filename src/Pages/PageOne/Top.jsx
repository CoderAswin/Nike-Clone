import { ExpandMore, Sort } from '@mui/icons-material'
import { Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Filter from './Filter'

const Top = () => {
    const [filter, setFilter] = useState(true)
    const [sort, setSort] = useState(false)
    return (
        <>
            <Toolbar>
                <Stack mt={11}  direction="row" spacing={{lg:120 , md:60}}>
                    <Box>
                        <Typography variant='h5'>Mens Shoes(427)</Typography>
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Box mr={6} onClick={()=>setFilter(!filter)} display="flex" alignItems="center">
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
                        {sort && <Stack spacing={1} sx={{position:"absolute" , right:"90px" , top:"130px"  , zIndex:"9999" , textAlign:"right" , backgroundColor:"#FFFFFF" , padding:"25px" , borderRadius:"10px" , cursor:"pointer"}}>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Featured</Typography>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Newest</Typography>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Price: High-Low</Typography>
                            <Typography sx={{"&:hover":{color:"#716F75"}}}>Price: Low-High</Typography>
                        </Stack>}
                    </Box>
                </Stack>
            </Toolbar>
            <Filter filter={filter}/>
        </>
    )
}

export default Top

//sx={{ position: "absolute", right: {lg:"95px" , md:"45px"}, top: "145px", display: { md: "flex", sm: "none", xs: "none" }, gap: "40px", alignItems: "center" }}