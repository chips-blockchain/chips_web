import React, { ReactElement } from "react"
import { FixedObject } from "gatsby-image"
import Img from "gatsby-image"
import { sampleBase64 } from "../../utils/sampleBase64"
import styled from '@emotion/styled'

type ButtonProps = {
    text: string,
    theme: string,
    link: string
}

const defaultProps = {
    text: "Learn more",
    theme: 'blue',
    link: "/"
}

const StyledButton = styled.button`
    width: 200px;
    height: 60px;
    height: 58px;
    border-radius: 5px;
    border: 0px;
    text-transform: uppercase;
    color: var(--color-almostWhite);
    font-size: var(--font-size-p);
    font-family: var(--font--family-secondary);
    font-weight: bold;
    cursor: pointer;

    background: ${props => 
        props.theme == 'red' ? 'linear-gradient(180deg, rgba(255, 17, 81, 0) 0%, rgba(255, 17, 81, 0.8) 0.01%, rgba(255, 66, 116, 0.9) 100%)' :
        props.theme == 'blue' ?  'linear-gradient(180deg, rgba(75, 171, 248, 0) 0%, rgba(73, 130, 244, 0.4) 0.01%, #4BABF8 100%)' :
            'linear-gradient(180deg, rgba(245, 63, 255, 0) 0%, rgba(201, 42, 204, 0.4) 0.01%, #F53FFF 100%)'
    }

`

const Button = ({ text, theme, link }: ButtonProps): ReactElement => (
    <a href={link}>
        <StyledButton theme={theme}>
            {text}
        </StyledButton>
    </a>
)

Button.defaultProps = defaultProps
export default Button