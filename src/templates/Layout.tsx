import React from "react"
import "../styles/variables.css";
import { graphql, useStaticQuery } from 'gatsby'
import styled from "@emotion/styled"
import brickbg from "../images/brick_bg.svg"
import mainbg from "../images/bgx1.svg"
import joincommunity from "../images/text_joincommunity.svg"
import socialneon from "../images/bg_social_neon.svg"
import SocialBox from "../components/Molecules/SocialBox";


import github from "../images/icon_github.svg"
import discord from "../images/icon_discord.svg"
import mail from "../images/icon_mail.svg"
import file from "../images/icon_file.svg"
import twitter from "../images/icon_twitter.svg"
import btc from "../images/icon_btc.svg"
import BackgroundImage from "gatsby-background-image";


const MainBackground = styled.section`
  // background-image: url(${mainbg});

`
const Footer = styled.footer`
  background-image: url(${brickbg});
  background-size: cover; 
  background-repear: no-repeat;
  margin: 0;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SocialLinks = styled.div`
  background-image: url(${socialneon});
  background-size: cover; 
  background-repear: no-repeat;
  height: 335px;
  width: 1250px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;

`

export default function Layout({ children }) {

  const data = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "bgx1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

  return (
    <div>
      <BackgroundImage
          Tag="section"
          fluid={data.bg.childImageSharp.fluid}
        >
          {children}  
      </BackgroundImage>
      <Footer id="joincommunity">
        <img style={{width: '800px'}} src={joincommunity}></img>      
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
      </Footer>  
    </div>
  )
}