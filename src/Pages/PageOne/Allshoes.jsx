import { styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import allShoeApi from '../../Api/shoes'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../../theme"
import { useNavigate, Link } from 'react-router-dom'


const Allshoes = ({filter}) => {


    const navigate = useNavigate()
    const [allShoes, setAllShoes] = useState()
    const [imgChange, setImgChange] = useState()
    const [allShoesHover, setAllShoesHover] = useState()

    // const Body = styled(Box)(({ }) => ({
    //     display: "grid",
    //     gridTemplateColumns: "repeat(3, 374.4px)",
    //     columnGap:"15px",
    //     rowGap: "60px",
    //     marginTop: "35px",
    // }))

    const Img = styled("img")(({ theme }) => ({
        [theme.breakpoints.up('lg')]: {
            width: filter ? "348px" : "461px",
        },
        [theme.breakpoints.only('md')]: {
            width: filter ?"209.33px": "296px",
        },
        [theme.breakpoints.only('sm')]: {
            width: "335px",
        },
        [theme.breakpoints.only('xs')]: {
            width: "348px",
        },
    }))

    // const StyledLink = styled(Link)(({})=>({

    //     &:focus, &:hover, &:visited, &:link, &:active {
    //     text-decoration: none;
    // }
    // }))
    const StyledLink = styled(Link)(({ theme }) => ({
        "&:hover":{textDecoration:"none" , color:"inherit"},
        "&:focus":{textDecoration:"none" , color:"inherit"},
        "&:visited":{textDecoration:"none" , color:"inherit"},
        "&:link":{textDecoration:"none" , color:"inherit"},
        "&:active":{textDecoration:"none" , color:"inherit"},
    }))
    



    const changeImage = (img, id) => {
        setAllShoesHover(id)
        setImgChange(img)
    }



    return (
        <Toolbar>
            {/* <ThemeProvider theme={theme}> */}
            <Box sx={{ display: "grid", gridTemplateColumns: { lg: filter? "repeat(3, 348px)":"repeat(3, 461px)", md: filter? "repeat(3, 209.33px)":"repeat(3, 296px)" , sm: "repeat(2, 335px)", xs: "repeat(1, 348px)" }, columnGap: { lg: "15px", md: "10px", sm: "10px" }, rowGap: { lg: "60px", md: "50px", sm: "20px" }, marginTop: { lg: "35px", md: "25px", sm: "20px", xs: "10px" } }}>
                {
                    allShoeApi.map((shoes) => (
                        <StyledLink to={`/items/${shoes.id}`}>
                            <Box onMouseOver={() => setAllShoes(shoes.id)} onMouseLeave={() => setAllShoes(false)}
                                sx={{ cursor: "pointer", fontFamily: "fantasy" }} key={shoes.id}>
                                {shoes.id === allShoesHover ? <Img src={imgChange} alt="" /> : <Img src={shoes.images.imgOne} alt="" />}
                                {
                                    shoes.id === allShoes &&
                                    <Box marginTop="5px">
                                        <img style={{ width: "35px" }} onMouseOver={() => changeImage(shoes.images.imgOne, shoes.id)} src={shoes.images.imgOne} alt="" />
                                        <img style={{ width: "35px", marginLeft: "5px" }} onMouseOver={() => changeImage(shoes.images.imgTwo, shoes.id)} src={shoes.images.imgTwo} alt="" />
                                        <img style={{ width: "35px", marginLeft: "5px" }} onMouseOver={() => changeImage(shoes.images.imgThree, shoes.id)} src={shoes.images.imgThree} alt="" />
                                        <img style={{ width: "35px", marginLeft: "5px" }} onMouseOver={() => changeImage(shoes.images.imgFour, shoes.id)} src={shoes.images.imgFour} alt="" />
                                    </Box>
                                }
                                <Box>
                                    {
                                        shoes.id !== allShoes ?
                                            <Box>
                                                <Typography color="#AA4E1F">{shoes.offer}</Typography>
                                                <Typography>{shoes.shoeName}</Typography>
                                                <Typography color="#9A9BA0">{shoes.type}</Typography>
                                                <Typography color="#9A9BA0">{shoes.colors} Colours</Typography>
                                                <Typography mt={2}>MRP: {shoes.price}</Typography>
                                            </Box> :
                                            <Box>
                                                <Typography color="#AA4E1F">{shoes.offer}</Typography>
                                                <Typography>MRP: {shoes.price}</Typography>
                                            </Box>
                                    }
                                </Box>
                            </Box>
                        </StyledLink>
                    ))}
            </Box>
            {/* </ThemeProvider> */}
        </Toolbar>
    )
}

export default Allshoes