import React from "react"
import { StyledSideMenu } from "../../Atoms/StyledSideMenu"
import { MenuLink } from "./types"

type NavigationSideProps = {
  open: boolean
  setOpen: Function
  menuLinks: Array<MenuLink>
}

const defaultProps = {
  open: false,
  setOpen: o => !o,
  menuLinks: [],
}

const NavigationSide = ({ open, setOpen, menuLinks }: NavigationSideProps) => {
  return (
    <StyledSideMenu open={open}>
      {menuLinks.map(link => (
        <a href={link.link} key={link.name}>
          {link.name}
        </a>
      ))}
    </StyledSideMenu>
  )
}

NavigationSide.defaultProps = defaultProps
export default NavigationSide
