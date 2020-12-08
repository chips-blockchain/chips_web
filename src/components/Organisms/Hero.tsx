import React from "react"
import Title from "../Atoms/Title"
import HeroText from "../Atoms/HeroText"
import styled from '@emotion/styled'
import { sampleBase64 } from "../../utils/sampleBase64"
import ClickableIcon from "../Atoms/ClickableIcon"
import github from "../../images/github.svg"
import discord from "../../images/discord.svg"

type HeroProps = {
    title: string,
    text: string,
    logoImg: string
}

const defaultProps = {
    title: "Title",
    text: "Lorem ipsum",
    logoImg: sampleBase64,
}

const HeroContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1400px;
    margin: auto;
    padding-top: 4.5rem;
`

const HeroTextContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 5rem;
`

const Hero = ({ title, text, logoImg }: HeroProps) => (
    <HeroContainer>
        <div style={{width: `100%`, maxWidth: `575px`}}>
            <img src={logoImg} />
        </div>
        <HeroTextContainer>
            <Title>{title}</Title>
            <HeroText>{text}</HeroText>
            <div>
                <ClickableIcon icon={github} link={'http://link.com'} />
                <ClickableIcon icon={discord} link={'http://link.com'} />
            </div>
        </HeroTextContainer>
    </HeroContainer>
)

Hero.defaultProps = defaultProps
export default Hero