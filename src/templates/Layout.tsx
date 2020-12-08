import React from "react"
import "../styles/variables.css";
import { graphql, useStaticQuery } from 'gatsby'
import styled from "@emotion/styled"
import brickbg from "../images/brick_bg.svg"
import mainbg from "../images/bgx1.svg"


const MainBackground = styled.section`
  // background-image: url(${mainbg});

`
const Footer = styled.footer`
  background-image: url(${brickbg});
  background-size: cover; 
  background-repear: no-repeat;
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
      <MainBackground>
        {children}  
      </MainBackground>

      {/* <BackgroundImage
          Tag="section"
          fluid={data.bg.childImageSharp.fluid}
        >
          {children}  
      </BackgroundImage> */}
      <Footer>
        <h3>I am footer</h3>
      </Footer>  
    </div>
  )
}