import React from "react"
import "../styles/variables.css";
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import Footer from "../components/Organisms/Footer"

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
    <Footer />
    </div>
  )
}