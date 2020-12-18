import React, { ReactElement, useState } from "react"
import NavigationLink from "../../Atoms/NavigationLink"
import styled from "@emotion/styled"
import Burger from "./Burger"
import NavigationSide from "./NavigationSide"
import { MenuLink } from "./types"

const NavigationContainer = styled.div`
  padding-top: 1.5rem;
  a {
    opacity: 0.7;
    color: var(--color-almostWhite);
  }

  a:hover {
    color: var(--color-neonBlue);
    opacity: 1;
  }
`
const NavigationHorizontal = styled.div`
  @media (max-width: 49em) {
    display: none;
  }
`
const NavigationVertical = styled.div`
  display: none;
  @media (max-width: 49em) {
    display: block;
  }
`

type NavigationProps = {
  menuLinks: Array<MenuLink>
}

const defaultProps = {
  menuLinks: [{ link: "/", name: "Home" }],
}

const Navigation = ({ menuLinks }: NavigationProps): ReactElement => {
  const [open, setOpen] = useState(false)
  return (
    <NavigationContainer>
      <NavigationHorizontal>
        {menuLinks.map(link => (
          <NavigationLink
            to={link.link}
            key={link.name}
            activeClassName="active"
          >
            {link.name}
          </NavigationLink>
        ))}
      </NavigationHorizontal>
      <NavigationVertical>
        <Burger open={open} setOpen={setOpen} />
        <NavigationSide menuLinks={menuLinks} open={open} setOpen={setOpen} />
      </NavigationVertical>
    </NavigationContainer>
  )
}

Navigation.defaultProps = defaultProps
export default Navigation
