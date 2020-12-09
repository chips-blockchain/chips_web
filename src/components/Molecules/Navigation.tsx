import React, { ReactElement } from "react"
import NavigationLink from "../Atoms/NavigationLink"
import styled from '@emotion/styled'

type MenuLink = {
    link: string,
    name: string,
}

type NavigationProps = {
    menuLinks: Array<MenuLink>,
    textColor: string
}

const defaultProps = {
    menuLinks: [{link: "/", name: "Home"}],
    textColor: "#FFFFFF"
}
const NavigationContainer=styled.div`
    padding-top: 1.5rem;
    a {
        opacity: 0.7
    }

    a:hover {
        color: var(--color-neonBlue);
        opacity: 1;
    }
`

const Navigation = ({ menuLinks, textColor }: NavigationProps): ReactElement => (
    <NavigationContainer>
        {menuLinks.map(link => (
            <NavigationLink
                to={link.link}
                key={link.name}
                textColor={textColor}
                activeClassName="active"
            >
            {link.name}
        </NavigationLink>
        ))}
    </NavigationContainer>
)

Navigation.defaultProps = defaultProps
export default Navigation