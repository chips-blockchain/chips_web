import React from "react"
import {Link } from "gatsby"
import Navigation from "../Molecules/Navigation"
import styled from "@emotion/styled"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
  padding-top: 50px;
`

export default function Header({ logoImage, menuLinks, navigationColor }) {
  return (
      <StyledHeader>
        <Link to="/">
          <img style={{width: '200px'}} src={logoImage}></img>
        </Link>
       <Navigation
          menuLinks={menuLinks}
          textColor={navigationColor}
       />
      </StyledHeader>
    )
}