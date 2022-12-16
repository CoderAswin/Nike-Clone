import { Accordion, Box, Divider, Toolbar, Typography, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, FormGroup, styled, IconButton, Drawer } from '@mui/material'
import { padding, Stack } from '@mui/system'
import React, { useState } from 'react'
import { ExpandMore, Sort, Tune } from '@mui/icons-material'
import Allshoes from './Allshoes'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../../theme"
import MobileDrawer from './MobileDrawer'


const Filter = ({filter}) => {

    const [mobileOpen, setMobileOpen] = useState(false)

    const Size = styled(Box)(({ }) => ({
        border:"1px solid #BEBCB3",
        // borderStyle: "groove",
        // borderWidth: "2px",
        // borderRadius: "3px",
        // borderColor: "#BFBFBF",
        color: "#000000",
        cursor: "pointer",
        boxSizing: "border-box",

    }))

    const SizeBody = styled(Box)(({ }) => ({
        display: "grid",
        gap: "8px",
        marginTop: "5px",
        gridTemplateColumns: "repeat(3, 47.34px)"
    }))

    const Color = styled(Box)(({ }) => ({
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        borderWidth: "2px",
        cursor: "pointer"
    }))





    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            <Toolbar>
                <Box sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" }, gap: { lg: "40px", md: "25px" }, flexDirection: { md: "row", sm: "column" } }} >
                    {filter && <Box mt={4} sx={{ overflowY: "auto", height: { lg: "70vh", md: "70vh", sm: "auto" } }} className='sidebar-scroll'>
                        <Box sx={{ display: { lg: "block", md: "block", sm: "flex", xs: "flex" }, gap: { lg: "20px", md: "10px", sm: "20px", xs: "20px" }, width: { md: "100%", sm: "730px", xs: "400px" }, overflowX: "auto" }} paddingBottom="50px">

                            <Typography>Lifestyle</Typography>
                            <Typography>Jordan</Typography>
                            <Typography>Running</Typography>
                            <Typography>Basketball</Typography>
                            <Typography>Training</Typography>
                            <Typography>Football</Typography>
                            <Typography>Skateboarding</Typography>
                            <Typography>Golf</Typography>
                            <Typography>Boots</Typography>
                            <Typography>Tennis</Typography>
                            <Typography>Athletics</Typography>
                            <Typography>Walking</Typography>

                        </Box>
                        {/* <Divider sx={{ width: "75%" }} /> */}
                        <Box sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>
                            <Box>
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Gender</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Men" />
                                            <FormControlLabel control={<Checkbox />} label="Women" />
                                            <FormControlLabel control={<Checkbox />} label="Unisex" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box >
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Kids</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Boys" />
                                            <FormControlLabel control={<Checkbox />} label="Girls" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box >
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Price</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Under ₹ 2 500.00" />
                                            <FormControlLabel control={<Checkbox />} label="₹ 2 501.00 - ₹ 7 500.00" />
                                            <FormControlLabel control={<Checkbox />} label="₹ 7 501.00 - ₹ 12 999.00" />
                                            <FormControlLabel control={<Checkbox />} label="Over ₹ 13 000.00" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box >
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Size</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ textAlign: "center" }} >
                                        <SizeBody display="flex" gap="10px">
                                            <Size>
                                                <Typography>3</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>3.5</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>4</Typography>
                                            </Size>
                                        </SizeBody>
                                        <SizeBody>
                                            <Size>
                                                <Typography>4.5</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>5</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>5.5</Typography>
                                            </Size>
                                        </SizeBody>
                                        <SizeBody>
                                            <Size>
                                                <Typography>6.5</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>7</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>7.5</Typography>
                                            </Size>
                                        </SizeBody>
                                        <SizeBody>
                                            <Size>
                                                <Typography>8</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>8.5</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>9</Typography>
                                            </Size>
                                        </SizeBody>
                                        <SizeBody>
                                            <Size>
                                                <Typography>10</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>10.5</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>11</Typography>
                                            </Size>
                                        </SizeBody>
                                        <SizeBody>
                                            <Size>
                                                <Typography>13</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>14</Typography>
                                            </Size>
                                            <Size>
                                                <Typography>15</Typography>
                                            </Size>
                                        </SizeBody>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box >
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Color</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box display="flex" gap="40px">
                                            <Color sx={{ backgroundColor: "#000000" }}></Color>
                                            <Color sx={{ backgroundColor: "#1790C8" }} ></Color>
                                            <Color sx={{ backgroundColor: "#825D41" }}></Color>
                                        </Box>
                                        <Box mt={2} display="flex" gap="40px">
                                            <Color sx={{ backgroundColor: "#7BBA3C" }}></Color>
                                            <Color sx={{ backgroundColor: "#808080" }}></Color>
                                            <Color sx={{ backgroundColor: "#000000" }}></Color>
                                        </Box>
                                        <Box mt={2} display="flex" gap="40px">
                                            <Color sx={{ backgroundColor: "#F36B26" }}></Color>
                                            <Color sx={{ backgroundColor: "#F0728F" }}></Color>
                                            <Color sx={{ backgroundColor: "#8D429F" }}></Color>
                                        </Box>
                                        <Box mt={2} display="flex" gap="40px">
                                            <Color sx={{ backgroundColor: "#E7352B" }}></Color>
                                            <Color sx={{ backgroundColor: "#825D41" }}></Color>
                                            <Color sx={{ backgroundColor: "#FED533" }}></Color>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box>
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Brand</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Nike Sportswear" />
                                            <FormControlLabel control={<Checkbox />} label="Jordan" />
                                            <FormControlLabel control={<Checkbox />} label="Nike By You" />
                                            <FormControlLabel control={<Checkbox />} label="NikeLab" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box>
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Shoes</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Boots" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box>
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Collaborator</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Nike x MMW" />
                                            <FormControlLabel control={<Checkbox />} label="sacai" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            {/* <Divider sx={{ width: "75%" }} /> */}
                            <Box  >
                                <Accordion sx={{ width: "75%", boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography>Icon</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Air Force 1" />
                                            <FormControlLabel control={<Checkbox />} label="Air Max" />
                                            <FormControlLabel control={<Checkbox />} label="Blazer" />
                                            <FormControlLabel control={<Checkbox />} label="Cortez" />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>

                        <Box sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" }, justifyContent: { sm: "space-between", xs: "space-between" }, alignItems: { sm: "center", xs: "center" } }}>
                            <Typography>424 Results</Typography>
                            <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { sm: "flex", xs: "flex" }, gap: { sm: "5px", xs: "5px" }, border: { sm: "2px solid #BEBCB3", xs: "2px solid #BEBCB3" }, borderRadius: { sm: "30px", xs: "30px" }, padding: { sm: "8px", xs: "8px" } }}>
                                <Typography >Filter</Typography>
                                <Tune />
                            </IconButton>
                        </Box>

                        <Box component="nav">
                            <Drawer
                                // container={container}
                                anchor='bottom'
                                variant="temporary"
                                open={mobileOpen}
                                onClose={() => setMobileOpen(!mobileOpen)}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { md: 'none', sm: 'block' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "103%" },
                                }}
                            >
                                <MobileDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

                            </Drawer>
                        </Box>

                    </Box>}



                    <Box sx={{ overflowY: "auto", height: "130vh" }} className='content-scroll'>
                        <Allshoes filter={filter} />
                    </Box>
                    
                </Box>
            </Toolbar>
            {/* </ThemeProvider> */}
        </>
    )
}

export default Filter