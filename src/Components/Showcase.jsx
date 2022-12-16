import { Box, Toolbar, Typography, IconButton, Stack , styled} from '@mui/material'
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import React, { useRef, useState } from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const Showcase = () => {

    const Img = styled("img")(({theme})=>({
        // height:{laptopL:"467.49px"},
        // width:{laptopL:"467.49px"}
    }))

    const slideRef = useRef()
    const [slideNumber, setSlideNumber] = useState(1)


    const handleClick = (direction) => {
        const distance = slideRef.current.getBoundingClientRect().x
        if (direction === "left" && slideNumber > 1) {
            setSlideNumber(slideNumber - 1)
            slideRef.current.style.transform = `translateX(${455 + distance}px)`
        }
        if (direction === "right" && slideNumber < 8) {
            setSlideNumber(slideNumber + 1)
            slideRef.current.style.transform = `translateX(${-500 + distance}px)`
        }

    }


    const shoeImg = [
        {
            id: 0,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/cb569756-10ae-415a-bd39-975a69b00c49/air-force-1-07-lv8-shoes-rbKxJh.png",
            name: "Nike Air Force 1 '07 LV8",
            category: "Mens's Shoes",
            price: "₹9,695"

        }, {
            id: 1,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/af060fe6-717c-40e9-a5a5-fb70ca91fe58/air-force-1-react-shoes-zCcwr4.png",
            name: "Nike Air Force 1 React",
            category: "Mens's Shoes",
            price: "₹11,995"

        }, {
            id: 2,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/f7a4a8d2-9a8a-4527-b9d3-02199a5c8c1b/air-force-1-mid-react-shoes-Hbs6fH.png",
            name: "Nike Air Force 1 Mid React",
            category: "Mens's Shoes",
            price: "₹12,995"
        }, {
            id: 3,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4646ff3b-6246-4520-916c-4e192f694b63/air-force-1-mid-07-lv8-shoes-LKdCFK.png",
            name: "Nike Air Force 1 Mid '07 LV8",
            category: "Mens's Shoes",
            price: "₹10,795"
        }, {
            id: 4,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/0c7f91e6-4cf2-4bb5-991e-c19390a2b5de/custom-nike-air-force-1-mid-by-you-shoes.png",
            name: "Nike Air Force 1 Mid By You",
            category: "Mens's Shoes",
            price: "₹12,795"
        }, {
            id: 5,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/752efdf6-b2b7-47fc-b137-5a70b5dd9423/air-force-1-07-shoe-tnM0q0.png",
            name: "Nike Air Force 1 '07",
            category: "Mens's Shoes",
            price: "₹8,295"
        }, {
            id: 6,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
            name: "Nike Air Force 1 '07",
            category: "Mens's Shoes",
            price: "₹7,495"
        }, {
            id: 7,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/54d18b4f-1d2a-4273-abb1-1433514a4b95/air-force-1-low-sp-undercover-shoes.png",
            name: "Nike Air Force 1 Low SP x UNDERCOVER",
            category: "Mens's Shoes",
            price: "₹14,195"
        }, {
            id: 8,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/0447d3b3-28d3-4ba3-a6d6-deb0b21558af/air-force-1-mid-07-shoe-9S2mB4.png",
            name: "Nike Air Force 1 Mid '07",
            category: "Mens's Shoes",
            price: "₹8,195"
        }, {
            id: 9,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/dd16cd97-5cb4-49ad-b8ee-e2590967e8a1/air-force-1-07-shoes-hGwvVp.png",
            name: "Nike Air Force 1 '07",
            category: "Mens's Shoes",
            price: "₹8,895"
        }
    ]


    return (
        <>
            <Box mt={10} display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant='h5' marginLeft="30px">Best of Air Force 1s</Typography>
                <Box display="flex" marginRight="30px" gap="15px" alignItems="center">
                    {slideNumber === 1 ? <IconButton disabled sx={{ padding: "10px", backgroundColor: "#CCCCCC" }}>
                        <ChevronLeft />
                    </IconButton> : <IconButton  onClick={() => handleClick("left")} sx={{ padding: "10px", backgroundColor: "#CCCCCC" }}>
                        <ChevronLeft />
                    </IconButton>}
                    {slideNumber === 8 ? <IconButton disabled sx={{ padding: "10px", backgroundColor: "#CCCCCC" }}>
                        <ChevronRight />
                    </IconButton> : <IconButton onClick={() => handleClick("right")} sx={{ padding: "10px", backgroundColor: "#CCCCCC" }}>
                        <ChevronRight />
                    </IconButton>}
                </Box>
            </Box>
            <Box overflow="auto" marginRight="20px" className='vertical-scroll'>
                <Toolbar>
                    <Stack ref={slideRef} mt={2} sx={{ transform: "translateX(0px)", transition: "all 0.5s ease" }} direction='row' spacing={2}>
                        {shoeImg.map((img) => (
                            <ThemeProvider key={img.id} theme={theme}>
                            <Box key={img.id}>
                                <Img sx={{height:{laptopL:"441.35px" , laptop:"300.08px" , tablet:"538px" , mobileL:"300px" , mobileM:"300px" , mobileS:"300px"}}} src={img.image} alt="shoes" />
                                <Box display="flex" justifyContent="space-between" mt={2}>
                                    <div>
                                        <Typography>{img.name}</Typography>
                                        <Typography color="#A8A8A8">{img.category}</Typography>
                                    </div>
                                    <div>
                                        <Typography>{img.price}</Typography>
                                    </div>
                                </Box>
                            </Box>
                            </ThemeProvider>
                        ))}
                    </Stack>
                </Toolbar>
            </Box>
        </>
    )
}

export default Showcase