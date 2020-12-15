import React from "react"
import {Link } from "gatsby"
import Navigation from "../Molecules/Navigation"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 7rem 0 5rem;


  @media(max-width: 62em) {
    padding: 1rem;
  }

  @media(max-width: 43em) {
    & > img {
      width: 100px;
    }
  }
`

const Logo = styled.img`
  width: 200px;
  @media(max-width: 43em) {
    width: 100px;
  }
`

export default function Header({ logoImage, menuLinks, navigationColor }) {
  return (
      <StyledHeader>
        <Link to="/">
          <Img fixed={logoImage}></Img>
        </Link>
       <Navigation
          menuLinks={menuLinks}
          textColor={navigationColor}
       />
      </StyledHeader>
    )
}