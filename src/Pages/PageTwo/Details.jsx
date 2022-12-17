import { ExpandMore, FavoriteBorder } from '@mui/icons-material'
import { Box, Typography, styled, Button, Accordion, AccordionSummary, AccordionDetails, Divider, Rating } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'


const Details = ({price , shoeName , imgOne , imgTwo , imgThree , imgFour , One , two , three , four , five , six , seven, eight , nine , ten}) => {

  const Image = styled('img')(({ theme }) => ({
    [theme.breakpoints.only('laptopL')]: {
        width:"434px",
      },
      [theme.breakpoints.only('laptop')]: {
        width:"226px",
      },
      [theme.breakpoints.only('tablet')]: {
        width:"730px",
      },
      [theme.breakpoints.only('mobileL')]: {
        width:"400px",
      },
      [theme.breakpoints.only('mobileM')]: {
        width:"375px",
      },
      [theme.breakpoints.only('mobileS')]: {
        width:"320px",
      },
  }))

  const Video = styled('video')(({ theme }) => ({
    [theme.breakpoints.only('laptopL')]: {
        width:"434px",
      },
      [theme.breakpoints.only('laptop')]: {
        width:"226px",
      },
      [theme.breakpoints.only('tablet')]: {
        width:"730px",
      },
      [theme.breakpoints.only('mobileL')]: {
        width:"400px",
      },
      [theme.breakpoints.only('mobileM')]: {
        width:"375px",
      },
      [theme.breakpoints.only('mobileS')]: {
        width:"320px",
      },
  }))

  const Size = styled(Box)(({ }) => ({
    border:"1px solid #BEBCB3",
    // borderWidth: "2px",
    // borderRadius: "3px",
    // borderColor: "#BFBFBF",
    color: "#000000",
    cursor: "pointer",
    boxSizing: "border-box",
    padding: "8px",
    "&:hover": {
      borderColor: "#000000"
    }

  }))

  const SizeBody = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: "8px",
    marginTop: "5px",
    [theme.breakpoints.only('laptopL')]: {
      gridTemplateColumns: "repeat(3, 120px)",
    },
    [theme.breakpoints.only('laptop')]: {
      gridTemplateColumns: "repeat(3, 120px)",
    },
    [theme.breakpoints.only('tablet')]: {
      gridTemplateColumns: "repeat(3, 235px)",
    },
    [theme.breakpoints.only('mobileL')]: {
      gridTemplateColumns: "repeat(3, 121.6px)",
    },
    [theme.breakpoints.only('mobileM')]: {
      gridTemplateColumns: "repeat(3, 104.4px)",
    },
    [theme.breakpoints.only('mobileS')]: {
      gridTemplateColumns: "repeat(3, 86px)",
    },
    // gridTemplateColumns: "repeat(3, 120px)",


  }))

  const Img = styled('img')(({ }) => ({
    width: "70.4px",
    "&:hover": {
      border: "1px solid",
      borderColor: "#000000",
      borderRadius: "7px",
    },
    cursor: "pointer",
  }))
  return (
    <Box mt={13}>
      <Box>
        <Typography variant='h4'>{shoeName}</Typography>
        <Typography>Shoes</Typography>
      </Box>
      <Box mt={3}>
        <Typography>MRP : {price}</Typography>
        <Typography sx={{ color: "#757579" }}>incl. of taxes</Typography>
        <Typography sx={{ color: "#757579" }}>(Also includes all applicable duties)</Typography>
      </Box>
      <Box  mt={12} sx={{ display: { laptopL: "none", laptop: "none", tablet: "flex" , mobileL:"flex" , mobileM:"flex" , mobileS:"flex"}, width:{tablet:"730px" , mobileL:"400px" , mobileM:"345px" , mobileS:"300px"} , overflowX:{tablet:"auto" , mobileL:"auto" , mobileM:"auto" , mobileS:"auto"} , gap:{tablet:"10px" , mobileL:"10px"} ,  marginLeft: { lg: "20px", laptop: "20px" } }}>
        <Image src={One} alt="" />
        <Video controls autoPlay>
          <source src={two} />
        </Video>
        <Image src={three} alt="" />
        <Image src={four} alt="" />
        <Image src={five} alt="" />
        <Image src={six} alt="" />
        <Image src={seven} alt="" />
        <Image src={eight} alt="" />
        <Image src={nine} alt="" />
        <Image src={ten} alt="" />
      </Box>
      <Stack ml={{laptopL:"0px" , laptop:"0px" , tablet:"0px"}} spacing={1} direction="row" mt={5}>
        <Img sx={{width:{mobileS:"65px"}}} src={imgOne} alt="" />
        <Img sx={{width:{mobileS:"65px"}}}src={imgTwo} alt="" />
        <Img sx={{width:{mobileS:"65px"}}}src={imgThree} alt="" />
        <Img sx={{width:{mobileS:"65px"}}}src={imgFour} alt="" />
      </Stack>
      <Stack mt={4} spacing={{ laptopL: 27, laptop: 27, tablet: 70 , mobileL:28 , mobileM:21}} direction="row">
        <Typography>Select Size</Typography>
        <Typography>Size Guide</Typography>
      </Stack>
      <Box sx={{ textAlign: "center" }}>
        <SizeBody display="flex" gap="10px">
          <Size>
            <Typography>UK 4.5</Typography>
          </Size>
          <Size>
            <Typography>UK 5.5</Typography>
          </Size>
          <Size>
            <Typography>UK 6 (EU 40)</Typography>
          </Size>
        </SizeBody>
        <SizeBody>
          <Size>
            <Typography>UK 6.5</Typography>
          </Size>
          <Size>
            <Typography>UK 7</Typography>
          </Size>
          <Size>
            <Typography>UK 7.5</Typography>
          </Size>
        </SizeBody>
        <SizeBody>
          <Size>
            <Typography>UK 8</Typography>
          </Size>
          <Size>
            <Typography>UK 8.5</Typography>
          </Size>
          <Size>
            <Typography>UK 9</Typography>
          </Size>
        </SizeBody>
        <SizeBody>
          <Size>
            <Typography>UK 9.5</Typography>
          </Size>
          <Size>
            <Typography>UK 10</Typography>
          </Size>
          <Size>
            <Typography>UK 10.5</Typography>
          </Size>
        </SizeBody>
        <SizeBody>
          <Size>
            <Typography>UK 11</Typography>
          </Size>
          <Size>
            <Typography>UK 11.5</Typography>
          </Size>
          <Size>
            <Typography>UK 12</Typography>
          </Size>
        </SizeBody>
      </Box>

      <Stack spacing={2} mt={1}>
        <Button sx={{ borderRadius: "30px", padding: "20px", width: { laptopL: "376px", laptop: "376px", tablet: "99%" , mobileL:"96%" , mobileM:"95%" , mobileS:"91%"}, backgroundColor: "#000000", "&:hover": { backgroundColor: "#757575" } }} variant='contained'>Add to Bag</Button>
        <Button sx={{ borderRadius: "30px", padding: "20px", width: { laptopL: "376px", laptop: "376px", tablet: "99%" , mobileL:"96%", mobileM:"95%", mobileS:"91%"}, backgroundColor: "#FFFFFF", color: "#000000", "&:hover": { backgroundColor: "#FFFFFF" } }} variant='contained' endIcon={<FavoriteBorder />}>Favourite</Button>
      </Stack>

      <Box mt={4} sx={{ display: { laptopL: "flex", tablet: "flex" }, flexDirection: { laptopL: "column", laptop: "column", tablet: "row" } }}>
        <Typography sx={{ color: "#757579", marginLeft: { laptopL: "20px", laptop: "20px", tablet: "130px" , mobileL:"30px"} }}>This product is excluded from site promotions  </Typography>
        <Typography sx={{ marginLeft: { laptopL: "130px", laptop: "130px", tablet: "8px" , mobileL:"140px"}, color: "#757579" }}>and discounts.</Typography>
      </Box>

      <Stack mt={6} spacing={4}>
        <Typography sx={{ display: { laptopL: "block", laptop: "block", tablet: "none" , mobileL:"none" , mobileM:"none" , mobileS:"none"} }}>
          Familiar but always fresh, the iconic Air Jordan 1 is <br />
          remastered for today's sneakerhead culture. This <br />
          Retro High OG version goes all in with premium <br />
          leather, comfortable cushioning and classic design <br />
          details.
        </Typography>
        <Typography sx={{ display: { laptopL: "none", laptop: "none", tablet: "block" , xs:"none"} }}>
          Familiar but always fresh, the iconic Air Jordan 1 isremastered for today's sneakerhead culture. This <br />

          Retro High OG version goes all in with premium leather, comfortable cushioning and classic design <br />

          details.
        </Typography>
        <Box >
          <ul style={{ marginLeft: "16px" }}>
            <li>
              <Typography>Colour Shown: Stealth/White</Typography>
            </li>
            <li>
              <Typography>Style: 555088-037</Typography>
            </li>
          </ul>
        </Box>
      </Stack>

      <Stack mt={4}>
        <Typography sx={{ textDecoration: "underline", textUnderlinePosition: "under" }}>View Product Details</Typography>
      </Stack>


      <Stack spacing={1} mt={4}>
        <Divider />
        <Box>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='h6'>Delivery & Returns</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={3}>
                <Typography>All purchases are subjected to delivery fees.</Typography>
                <ul style={{ marginLeft: "15px" }}>
                  <li>
                    <Typography>Standard delivery 4–9 Working Days</Typography>
                  </li>
                </ul>
                <Typography>Orders are processed and delivered Monday– <br /> Friday (excluding public holidays).</Typography>
                <Typography>Nike Members enjoy free returns.</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Divider />
        <Box >
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box display="flex" alignItems="center" gap="5px">
                <Typography variant='h6'>Reviews</Typography>
                <Rating name="read-only" value={4} readOnly />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <Typography sx={{ textDecoration: "underline", textUnderlinePosition: "under" }}>Write A Review</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Divider />
        <Box >
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='h6'>Product Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Declaration of Importer: Direct import by the <br /> individual customer</Typography>
              <Stack spacing={2} mt={2}>
                <Typography>
                  Marketed by: Nike Global Trading B.V. Singapore <br /> Branch, 30 Pasir Panjang Road, #10-31/32, <br /> Mapletree Business City, Singapore 117 440
                </Typography>
                <Typography>Net Quantity: 1 Pair</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Divider />
      </Stack>
    </Box>
  )
}

export default Details