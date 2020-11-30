import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import ListLink from "../Atoms/ListLink"

export default function Header() {
  return (
    <StaticQuery
    query={graphql`
      query {
        logoText: file(relativePath: { eq: "chips_logo_text.png" }) {
          childImageSharp {
            fixed(quality: 90, width: 200, height: 66) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <Link to="/">
          <Img fixed={data.logoText.childImageSharp.fixed} alt="Logo" />
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="#">About</ListLink>
          <ListLink to="#">Development</ListLink>
          <ListLink to="#">Community</ListLink>
          <ListLink to="#">Articles</ListLink>
          <ListLink to="#">FAQ</ListLink>
        </ul>
      </header>
    )}
  />

  )
}