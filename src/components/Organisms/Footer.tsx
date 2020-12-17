import React from "react"
import styled from "@emotion/styled"
import SocialBox from "../Molecules/SocialBox"
import joincommunity from "../../images/text/text_joincommunity.svg"
import socialneon from "../../images/bg/bg_social_neon.svg"
import breakpoints from "../../styles/breakpoints"
import socialData from "../../data/socialData"
import links from "../../data/links"


const StyledFooter = styled.footer`
  background-size: cover; 
  background-repear: no-repeat;
  margin: 0;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: ${breakpoints.mobile}) {
    padding-top: 5rem;
  }
`

const SocialLinks = styled.div`
  background-image: url(${socialneon});
  background-size: cover; 
  background-repear: no-repeat;
  height: 335px;
  width: 1250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;

  @media(max-width: ${breakpoints.extra}) {
    background-image: none;
    width: 600px;
    height: 100%;
  }
  @media(max-width: ${breakpoints.mobile}) {
    margin-top: 3rem;
    background-image: none;
    width: 100%;
    height: 100%;
  }
`
const ImageWrapper = styled.div`
  width: 800px;

  @media(max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

const Footer = () => {
  return (
       <StyledFooter id="joincommunity">
         <ImageWrapper>
            <img src={joincommunity}></img>      
         </ImageWrapper>
        <SocialLinks>
          {socialData.map((one, key) => 
              <SocialBox 
              color={one.color} 
              key={key}
              icon={one.icon}
              title={one.title}
              buttonText={one.buttonText}
              buttonLink={one.buttonLink}
            />
          )}
        </SocialLinks>  
        <p>Illustrations by Pwnz. Design by web_worker, Pwnz, NutellaLicka and Daria. Coded by <a href={links.daria}>Daria</a>.</p>
        <p>Copyright Chips Pangea Poker 2016. <a href="">Privacy Policy</a>. <a href="">Terms of use.</a></p>
      </StyledFooter> 
    )
}

export default Footer;