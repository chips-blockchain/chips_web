import Img from "gatsby-image"
import React from "react"
import SocialBox from "../Molecules/SocialBox"
import breakpoints from "../../styles/breakpoints"
import links from "../../data/links"
import socialData from "../../data/socialData"
import socialneon from "../../images/bg/bg_social_neon.svg"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  background-size: cover;
  background-repear: no-repeat;
  margin: 0;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 5rem;
  }
  & > p {
    text-align: center;
    margin: 1rem 2rem 0 2rem;
  }
  padding-bottom: 1rem;
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

  @media (max-width: ${breakpoints.extra}) {
    background-image: none;
    width: 600px;
    height: 100%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 3rem;
    background-image: none;
    width: 100%;
    height: 100%;
  }
`
const ImageWrapper = styled.div`
  width: 800px;
  @media(max-width: ${breakpoints.tablet}) {
    width: 600px;
  }  
  @media(max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

const Footer = ({ header }) => {
  return (
    <StyledFooter id="joincommunity">
      <ImageWrapper>
        <Img fluid={header}></Img>
      </ImageWrapper>
      <SocialLinks>
        {socialData.map((one, key) => (
          <SocialBox
            color={one.color}
            key={key}
            icon={one.icon}
            title={one.title}
            buttonText={one.buttonText}
            buttonLink={one.buttonLink}
          />
        ))}
      </SocialLinks>
      <p>
        Illustrations by Pwnz. Design by web_worker, Pwnz, NutellaLicka and
        Daria. Coded by <a href={links.daria}>Daria</a>.
      </p>
      <p>
        Copyright Chips Pangea Poker 2021. <br /><a href="/privacy-policy">Privacy Policy</a>.{" "}
        <a href="/terms-of-use">Terms of use.</a>
      </p>
    </StyledFooter>
  )
}

export default Footer
