import React from "react"
import "../styles/variables.css";
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

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
    <BackgroundImage
        Tag="section"
        fluid={data.bg.childImageSharp.fluid}
      >
        {children}
        <footer>
          <h3>I am footer</h3>
        </footer>    
    </BackgroundImage>
  )
}