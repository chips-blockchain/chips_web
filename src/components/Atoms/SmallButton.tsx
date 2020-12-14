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
    width: 60px;
    height: 45px;
    height: 58px;
    background: linear-gradient(180deg, rgba(255, 17, 81, 0) 0%, rgba(255, 17, 81, 0.8) 0.01%, rgba(255, 66, 116, 0.9) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
`

const SmallButton = ({ link }: ButtonProps): ReactElement => (
    <a href={link}>
        <StyledButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.05021 19.0711L8.46443 20.4854L16.9497 12.0001L8.46443 3.51479L7.05021 4.929L14.1213 12.0001L7.05021 19.0711Z" fill="#F1F1F1"/>
            </svg>
        </StyledButton>
    </a>
)

SmallButton.defaultProps = defaultProps
export default SmallButton