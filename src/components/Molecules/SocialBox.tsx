import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import OutlineButton from "../Atoms/OutlineButton"

type SocialBoxProps = {
    icon: string,
    title: string,
    buttonText: string,
    buttonLink: string,
    color: string
}

const defaultProps = {
    icon: "",
    title: "Discord",
    buttonText: "Chat",
    buttonLink: "https://chat.com"
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.color ? p.color : 'var(--color-neonBlue)'};
    padding: 0rem 2rem;
    height: 215px;
    width: 115px;
    border-radius: 5px;
    margin: 0.5rem;
`

const SocialBox = ({ icon, title, buttonText, buttonLink, color }: SocialBoxProps): ReactElement => (
    <Container color={color}>
        <img src={icon}></img>
        <p>{title}</p>
        <OutlineButton 
            text={buttonText}
            link={buttonLink}
            bgColor={color}
        />
    </Container>
)

SocialBox.defaultProps = defaultProps
export default SocialBox