import React from "react"
import "../styles/variables.css"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Footer from "../components/Organisms/Footer"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "bg/bgx1_2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        brickBg: file(relativePath: { eq: "bg/brick_bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        textJoinCommunity: file(
          relativePath: { eq: "text/joincommunity.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <BackgroundImage Tag="section" fluid={data.bg.childImageSharp.fluid}>
        {children}
      </BackgroundImage>
      <BackgroundImage Tag="footer" fluid={data.brickBg.childImageSharp.fluid}>
        <Footer header={data.textJoinCommunity.childImageSharp.fluid} />
      </BackgroundImage>
    </div>
  )
}
