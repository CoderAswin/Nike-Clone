import { AppBar, Box, Drawer, IconButton, OutlinedInput, Toolbar, Typography, styled } from '@mui/material'
import { FavoriteBorderOutlined, WorkOutlineOutlined, SearchOutlined, MenuRounded } from "@mui/icons-material"
import React, { useState } from 'react'
import MobileDrawer from './MobileDrawer'
import NavDropMen from './NavDropMen'
import NavDropWomen from './NavDropWomen'
import NavDropKids from './NavDropKids'
import NavDropCustomize from './NavDropCustomize'
import NavDropSale from './NavDropSale'
import SearchBar from './SearchBar'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import {useNavigate} from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const Typo = styled(Typography)(({ theme }) => ({
        padding: "20px",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
            // textDecorationThickness:"5px", //change the underline thickness
            color: "black",
            textUnderlineOffset: "25px" //move the underline
        }
    }))


    const [mobileOpen, setMobileOpen] = useState(false)

    const [men, setMen] = useState(false)
    const [women, setWomen] = useState(false)
    const [kids, setKids] = useState(false)
    const [customize, setCustomize] = useState(false)
    const [sale, setSale] = useState(false)

    const [search, setSearch] = useState(false)


    // const navMenEnter = (e) => {
    //     if (e.clientY > 101) {
    //         setMen(true)
    //     }
    // }

    // const navMenLeave = (e) => {

    //         setMen(false)
    // }

    const navMenEnter = (e) => {
        if ((e.clientX >= 501 || e.clientX <= 559) || e.clientY > 36) {
            setMen(true)
        }
    }

    const navMenLeave = (e) => {
        if ((e.clientX < 501 || e.clientX > 559) || e.clientY < 37) {
            setMen(false)
        }
    }

    const navWomenEnter = (e) => {
        if ((e.clientX >= 568 || e.clientX <= 660) || e.clientY > 36) {
            setWomen(true)
        }
    }

    const navWomenLeave = (e) => {
        if ((e.clientX < 568 || e.clientX > 660) || e.clientY < 37) {
            setWomen(false)
        }
    }

    const navKidsEnter = (e) => {
        if ((e.clientX >= 663 || e.clientX <= 733) || e.clientY > 36) {
            setKids(true)
        }
    }

    const navKidsLeave = (e) => {
        if ((e.clientX < 663 || e.clientX > 733) || e.clientY < 37) {
            setKids(false)
        }
    }

    const navCustomizeEnter = (e) => {
        if ((e.clientX >= 735 || e.clientX <= 851) || e.clientY > 36) {
            setCustomize(true)
        }
    }

    const navCustomizeLeave = (e) => {
        if ((e.clientX < 735 || e.clientX > 851) || e.clientY < 37) {
            setCustomize(false)
        }
    }

    const navSaleEnter = (e) => {
        if ((e.clientX >= 852 || e.clientX <= 922) || e.clientY > 36) {
            setSale(true)
        }
    }

    const navSaleLeave = (e) => {
        if ((e.clientX < 852 || e.clientX > 922) || e.clientY < 37) {
            setSale(false)
        }
    }

    const leaveEveryThing = () => {
        setMen(false)
        setWomen(false)
        setKids(false)
        setCustomize(false)
        setSale(false)
    }




    return (
        <>
            <AppBar  onMouseEnter={() => leaveEveryThing()} component="nav" sx={{
                position: "sticky",
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
                // position:"absolute",
                // top:"40px"

            }}>
                <Toolbar>
                    <Box onClick={()=>navigate("/")} sx={{ flex: "3" , cursor:"pointer"}}>
                        <svg viewBox="0 0 24 24" width="60px" height="60px">
                            <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" >
                            </path>
                        </svg>
                    </Box>
                    <Box sx={{
                        color: "black",
                        display: "flex",
                        fontWeight: "bold",
                        flex: "4.5",
                        display: { sm: "none", md: "flex", xs: "none" },
                    }}>
                        <Typo onClick={()=>navigate("/all_shoes_men")} onMouseEnter={(e) => navMenEnter(e)} onMouseLeave={(e) => navMenLeave(e)}>Men</Typo>
                        <Typo onMouseEnter={(e) => navWomenEnter(e)} onMouseLeave={(e) => navWomenLeave(e)}>Women</Typo>
                        <Typo onMouseEnter={(e) => navKidsEnter(e)} onMouseLeave={(e) => navKidsLeave(e)}>Kids</Typo>

                        <Typo onMouseEnter={(e) => navCustomizeEnter(e)} onMouseLeave={(e) => navCustomizeLeave(e)}>Customize</Typo>
                        <ThemeProvider theme={theme}>
                            <Typo sx={{ display: {laptopL:"block", laptop: "none" } }} onMouseEnter={(e) => navSaleEnter(e)} onMouseLeave={(e) => navSaleLeave(e)}>Sale</Typo>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <Typo sx={{ display: {laptopL:"block" , laptop: "none" } }}>SNKRS</Typo>
                        </ThemeProvider>
                    </Box >
                    <ThemeProvider theme={theme}>
                        <Box sx={{ display: { laptop: "flex", tablet: "flex", mobileL: "flex", mobileM: "flex", mobileS: "flex" }, gap: { laptop: "15px", tablet: "15px", mobileL: "15px", mobileM: "15px", mobileS: "15px" } }}>

                            <Box sx={{ position: "relative", display: { laptop: "inline-block" } }}>
                                <OutlinedInput onClick={() => setSearch(!search)} placeholder='Search' sx={{
                                    borderRadius: "18px",
                                    height: "40px",
                                    maxWidth: "180px",
                                    padding: "0px 30px",
                                    backgroundColor: "#F5F5F5",
                                    "& fieldset": { border: 'none' },
                                    "&:hover": {
                                        backgroundColor: "#E5E5E5"
                                    },

                                    display: { laptop: "inline-flex", tablet: "none", mobileL: "none", mobileM: "none", mobileS: "none" },

                                }} />
                                <IconButton onClick={() => setSearch(!search)} sx={{ position: "absolute", left: { laptop: "1px", tablet: "-35px", mobileL: "-35px", mobileM: "-35px", mobileS: "-35px" } }}>
                                    <SearchOutlined />
                                </IconButton>
                            </Box>


                            <Box sx={{ display: { laptop: "inline-block", tablet: "none", mobileL: "none", mobileM: "none", mobileS: "none" } }}>
                                <IconButton>
                                    <FavoriteBorderOutlined />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton>
                                    <WorkOutlineOutlined />
                                </IconButton>
                            </Box>

                            <Box sx={{ display: { sm: "block", laptop: "none" } }}>
                                <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
                                    <MenuRounded />
                                </IconButton>
                            </Box>
                        </Box>
                    </ThemeProvider>
                </Toolbar>

                {<NavDropMen men={men} setMen={setMen} />}
                {<NavDropWomen women={women} setWomen={setWomen} />}
                {<NavDropKids kids={kids} setKids={setKids} />}
                {<NavDropCustomize customize={customize} setCustomize={setCustomize} />}
                {<NavDropSale sale={sale} setSale={setSale} />}

            </AppBar>




            
            

            {<SearchBar search={search} setSearch={setSearch} />}





            <Box component="nav">
                <Drawer
                    // container={container}
                    anchor='right'
                    variant="temporary"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(!mobileOpen)}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, padding: "20px 20px" },
                    }}
                >
                    <MobileDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

                </Drawer>
            </Box>

        </>
    )
}

export default Navbar