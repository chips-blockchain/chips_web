import React from "react"
import { Link } from "gatsby"
import Navigation from "../Molecules/Navigation"
import styled from "@emotion/styled"
import Img, { FixedObject } from "gatsby-image"
import { MenuLink } from "../Molecules/Navigation/types"

type HeaderProps = {
  logoImage: FixedObject
  menuLinks: Array<MenuLink>
}

const defaultProps = {
  logoImage: "",
  menuLinks: [{ link: "/", name: "Home" }],
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 7rem 0 5rem;

  @media (max-width: 62em) {
    padding: 1rem;
  }

  @media (max-width: 43em) {
    & > img {
      width: 100px;
    }
  }
`

const Logo = styled.img`
  width: 200px;
  @media (max-width: 43em) {
    width: 100px;
  }
`

const Header = ({ logoImage, menuLinks }: HeaderProps) => {
  return (
    <StyledHeader>
      <Link to="/">
        <Img fixed={logoImage}></Img>
      </Link>
      <Navigation menuLinks={menuLinks} />
    </StyledHeader>
  )
}

Header.defaultProps = defaultProps
export default Header
