import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Navigation from "../Molecules/Navigation"
import { css } from '@emotion/core'
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
          <Img fixed={logoImage}></Img>
        </Link>
       <Navigation
          menuLinks={menuLinks}
          textColor={navigationColor}
       />
      </StyledHeader>
    )
}