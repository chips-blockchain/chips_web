import React from "react"
import styled from "@emotion/styled"
import brickbg from "../../images/brick_bg.svg"
import SocialBox from "../Molecules/SocialBox"
import joincommunity from "../../images/text_joincommunity.svg"
import socialneon from "../../images/bg_social_neon.svg"

import github from "../../images/icon_github.svg"
import discord from "../../images/icon_discord.svg"
import mail from "../../images/icon_mail.svg"
import file from "../../images/icon_file.svg"
import twitter from "../../images/icon_twitter.svg"
import btc from "../../images/icon_btc.svg"
import breakpoints from "../../styles/breakpoints"

const StyledFooter = styled.footer`
  background-image: url(${brickbg});
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

const Footer = ({ logoImage, menuLinks, navigationColor }) => {
  return (
       <StyledFooter id="joincommunity">
         <ImageWrapper>
            <img src={joincommunity}></img>      
         </ImageWrapper>
        <SocialLinks>
          <SocialBox 
            color={'#2735B5'} 
            icon={discord}
            title={"Discord"}
            buttonText={"Chat"}
            buttonLink={""}
          />
          <SocialBox 
            color={'#3985BD'} 
            icon={mail}
            title={"Contact Us"}
            buttonText={"Email"}
            buttonLink={""}         
          />
          <SocialBox 
            color={'#6CD087'} 
            icon={file}
            title={"Blog"}
            buttonText={"Read"}
            buttonLink={""}
          />
          <SocialBox 
            color={'#3985BD'} 
            icon={twitter}
            title={"Twitter"}
            buttonText={"Follow"}
            buttonLink={""}
          />
          <SocialBox 
            color={'#D03758'} 
            icon={btc}
            title={"BitcoinTalk"}
            buttonText={"Post"}
            buttonLink={""}
          />
          <SocialBox 
            color={'#252525'} 
            icon={github}
            title={"Github"}
            buttonText={"Learn"}
            buttonLink={""}
          />
        </SocialLinks>  
        <p>Illustrations by Pwnz. Design by web_worker, Pwnz, NutellaLicka and Daria. Coded by Daria 🤗.</p>
        <p>Copyright Chips Pangea Poker 2016. Privacy Policy. Terms of use.</p>
      </StyledFooter> 
    )
}

export default Footer;