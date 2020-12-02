import React, { ReactElement } from "react"
import { FixedObject } from "gatsby-image"
import Img from "gatsby-image"
import { sampleBase64 } from "../../utils/sampleBase64"
import styled from '@emotion/styled'

type ClickableIconProps = {
    link: string,
    icon: FixedObject
}

const defaultProps = {
    link: "/",
    icon: sampleBase64
}

const IconLink = styled.a`
    padding: 1rem 1.5rem 1rem 0;
`

const ClickableIcon = ({ link, icon }: ClickableIconProps): ReactElement => (
    <IconLink href={link}>
        <Img fixed={icon}/>
    </IconLink>
)

ClickableIcon.defaultProps = defaultProps
export default ClickableIcon