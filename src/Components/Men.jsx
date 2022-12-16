import { Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import image from "../Assets/NikeForce.webp"


const Men = () => {
    return (
        <Box >
            <Toolbar>
                <Stack>
                    <Box>
                        <img style={{ width: "100%", height: "auto" }} src={image} alt="" />
                    </Box>
                    <Box>
                        <Stack spacing={3}>
                            <Box textAlign={{md:"center", xs:"left", sm:"left"}} mt={5}>
                                <Typography>Join Forces Pack</Typography>
                                <Typography variant='h2' sx={{ fontFamily: "fantasy", fontSize:{md:"80px" , xs:"40px" , sm:"40px"}, 
                                lineHeight:{md:"70px" , xs:"40px" , sm:"40px"} }}>
                                    CELEBRATING 40 <br />YEARS OF FORCE
                                </Typography>
                            </Box>
                            <Box textAlign={{md:"center", xs:"left", sm:"left"}}>
                                <Typography>
                                    Icons weren’t made in a day. The Join Forces Pack honors 40 years of
                                    <br />
                                    Force and the communities that embraced the AF1.
                                </Typography>
                            </Box>
                            <Box textAlign={{md:"center", xs:"left", sm:"left"}}>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        backgroundColor: "#000000",
                                        borderRadius: "20px"
                                    }}>
                                    Shop Air Force 1
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Toolbar>
        </Box>
    )
}
export default Men