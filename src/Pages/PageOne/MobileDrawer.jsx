import { HighlightOffTwoTone } from '@mui/icons-material'
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Radio, RadioGroup, Stack, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import theme from "../../theme"
import { ThemeProvider } from "@mui/material/styles"


const MobileDrawer = ({ mobileOpen, setMobileOpen }) => {
    const Size = styled(Box)(({ }) => ({
        border: "1px solid #BEBCB3",
        // borderStyle: "groove",
        // borderWidth: "2px",
        // borderRadius: "3px",
        // borderColor: "#BFBFBF",
        color: "#000000",
        cursor: "pointer",
        boxSizing: "border-box",
        padding: "10px"

    }))

    const SizeBody = styled(Box)(({ theme }) => ({
        display: "grid",
        gap: "8px",
        marginTop: "5px",
        [theme.breakpoints.only('tablet')]: {
            gridTemplateColumns: "repeat(5, 90.34px)",
        },
        [theme.breakpoints.only('mobileL')]: {
            gridTemplateColumns: "repeat(3, 90.34px)",
        },
        [theme.breakpoints.only('mobileM')]: {
            gridTemplateColumns: "repeat(2, 90.34px)",
        },
        [theme.breakpoints.only('mobileS')]: {
            gridTemplateColumns: "repeat(2, 90.34px)",
        },
        // gridTemplateColumns: "repeat(5, 90.34px)",
        textAlign: "center",
        marginTop: "15px"
    }))

    const Color = styled(Box)(({ }) => ({
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        borderWidth: "2px",
        cursor: "pointer"
    }))
    return (
        <Toolbar>
            <ThemeProvider theme={theme}>
                <Stack mt={4} spacing={4} sx={{ height: "95vh", overflowY: "auto" }}>
                    <Box>
                        <Stack direction="row" spacing={{ tablet: 82, mobileL: 40 , mobileM:33 , mobileS:26}}>
                            <Typography>Filter</Typography>
                            <Box onClick={() => setMobileOpen(!mobileOpen)} >
                                <HighlightOffTwoTone fontSize="large" />
                            </Box>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography>Sort By</Typography>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            sx={{ marginTop: "15px" }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Featured" />
                            <FormControlLabel value="male" control={<Radio />} label="Newest" />
                            <FormControlLabel value="high" control={<Radio />} label="Price: High-Low" />
                            <FormControlLabel value="low" control={<Radio />} label="Price: Low-High" />
                        </RadioGroup>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography>Gender(1)</Typography>
                        <FormGroup sx={{ marginTop: "15px" }}>
                            <FormControlLabel control={<Checkbox />} label="Men" />
                            <FormControlLabel control={<Checkbox />} label="Women" />
                            <FormControlLabel control={<Checkbox />} label="Unisex" />
                        </FormGroup>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography>Kids</Typography>
                        <FormGroup sx={{ marginTop: "15px" }}>
                            <FormControlLabel control={<Checkbox />} label="Boys" />
                            <FormControlLabel control={<Checkbox />} label="Girls" />
                        </FormGroup>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography>Shop By Price</Typography>
                        <FormGroup sx={{ marginTop: "15px" }}>
                            <FormControlLabel control={<Checkbox />} label="Under ₹ 2 500.00" />
                            <FormControlLabel control={<Checkbox />} label="₹ 2 501.00 - ₹ 7 500.00" />
                            <FormControlLabel control={<Checkbox />} label="₹ 7 501.00 - ₹ 12 999.00" />
                            <FormControlLabel control={<Checkbox />} label="Over ₹ 13 000.00" />
                        </FormGroup>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography>Size</Typography>
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
                            <Size>
                                <Typography>4.5</Typography>
                            </Size>
                            <Size>
                                <Typography>5</Typography>
                            </Size>
                            <Size>
                                <Typography>5.5</Typography>
                            </Size>
                            <Size>
                                <Typography>6.5</Typography>
                            </Size>
                            <Size>
                                <Typography>6(EU 39)</Typography>
                            </Size>
                            <Size>
                                <Typography>6(EU 39)</Typography>
                            </Size>
                            <Size>
                                <Typography>7</Typography>
                            </Size>
                            <Size>
                                <Typography>7.5</Typography>
                            </Size>
                            <Size>
                                <Typography>8</Typography>
                            </Size>

                            <Size>
                                <Typography>8.5</Typography>
                            </Size>
                            <Size>
                                <Typography>9</Typography>
                            </Size>
                            <Size>
                                <Typography>10</Typography>
                            </Size>
                            <Size>
                                <Typography>10.5</Typography>
                            </Size>
                            <Size>
                                <Typography>11</Typography>
                            </Size>
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
                    </Box>

                    <Divider />

                    <Box>
                        <Typography>Colour</Typography>
                        <Box mt={3} sx={{ display: "grid", gridTemplateColumns: "repeat(3 , 28px)", columnGap: "25%", rowGap: "10px" }}>
                            <Box>
                                <Color sx={{ backgroundColor: "#000000" }}></Color>
                                <Typography variant='caption'>Black</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#1790C8" }} ></Color>
                                <Typography variant='caption'>Blue</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#825D41" }}></Color>
                                <Typography variant='caption'>Brown</Typography >
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#7BBA3C" }}></Color>
                                <Typography variant='caption'>Green</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#808080" }}></Color>
                                <Typography variant='caption'>Grey</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#000000" }}></Color>
                                <Typography variant='caption' display="block">Multi</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#F36B26" }}></Color>
                                <Typography variant='caption'>Orange</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#F0728F" }}></Color>
                                <Typography variant='caption'>Pink</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#8D429F" }}></Color>
                                <Typography variant='caption'>Purple</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#E7352B" }}></Color>
                                <Typography variant='caption'>Red</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#825D41" }}></Color>
                                <Typography variant='caption'>White</Typography>
                            </Box>
                            <Box>
                                <Color sx={{ backgroundColor: "#FED533" }}></Color>
                                <Typography variant='caption'>Yellow</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography>Brand</Typography>
                        <FormGroup sx={{ marginTop: "15px" }}>
                            <FormControlLabel control={<Checkbox />} label="Nike SportsWear" />
                            <FormControlLabel control={<Checkbox />} label="Jordan" />
                            <FormControlLabel control={<Checkbox />} label="Nike By You" />
                            <FormControlLabel control={<Checkbox />} label="NikeLab" />
                        </FormGroup>
                    </Box>

                </Stack>
            </ThemeProvider>
        </Toolbar>

    )
}

export default MobileDrawer