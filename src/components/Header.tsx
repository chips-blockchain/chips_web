import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import "./layout.css";
import styled from 'styled-components'
import Img from 'gatsby-image'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ color: `white`, backgroundImage: `none`, textShadow: `none`}} to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
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
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
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

const StyledHeader = styled(Header)`
    width: 100%;
    min-height: 400vh;
    background-size: cover;
    background-color: transparent;
    paddding: 45px;
`

export default StyledHeader