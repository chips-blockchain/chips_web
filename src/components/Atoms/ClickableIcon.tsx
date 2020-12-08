import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import github from "../../images/icon_github.svg"

type ClickableIconProps = {
    link: string,
    icon: string
}

const defaultProps = {
    link: "/",
    icon: github
}

const IconLink = styled.a`
    padding: 1rem 1.5rem 1rem 0;
`

const ClickableIcon = ({ link, icon }: ClickableIconProps): ReactElement => (
    <IconLink href={link}>
        <img src={icon}></img>
    </IconLink>
)

ClickableIcon.defaultProps = defaultProps
export default ClickableIcon