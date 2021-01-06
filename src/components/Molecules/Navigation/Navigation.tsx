import React, { ReactElement, useState, useRef } from "react"
import NavigationLink from "../../Atoms/NavigationLink"
import styled from "@emotion/styled"
import Burger from "./Burger"
import NavigationSide from "./NavigationSide"
import { MenuLink } from "./types"
import { useOnClickOutside } from '../../../hooks';

const NavigationContainer = styled.div`
  padding-top: 2rem;
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
  const [open, setOpen] = useState(false);
  const node = useRef();
  // closes navigation on click outside
  useOnClickOutside(node, () => setOpen(false));
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
      <NavigationVertical ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavigationSide menuLinks={menuLinks} open={open} setOpen={setOpen} />
      </NavigationVertical>
    </NavigationContainer>
  )
}

Navigation.defaultProps = defaultProps
export default Navigation
