import React, { ReactElement } from "react"
import styled from '@emotion/styled'

type OutlineButtonProps = {
    text: string,
    link: string,
    bgColor: string
}

const defaultProps = {
    text: "CHAT",
    link: "https://chat.com",
    bgColor: "#FFFFFF"
}


const StyledButton = styled.button`
    width: 100px;
    height: 35px;
    text-transform: uppercase;
    color: var(--color-almostWhite);
    font-size: var(--font-size-p);
    font-family: var(--font--family-primary);
    border-radius: 5px;
    border: solid 2px var(--color-almostWhite);
    background-color: ${props => props.color};
    cursor: pointer;
`

const OutlineButton = ({ text, link, bgColor }: OutlineButtonProps): ReactElement => (
    <a href={link}>
        <StyledButton color={bgColor}>
            {text}
        </StyledButton>
    </a>
)

OutlineButton.defaultProps = defaultProps
export default OutlineButton