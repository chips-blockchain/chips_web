import React from "react"
import Title from "../Atoms/Title"
import HeroText from "../Atoms/HeroText"
import Img, { FixedObject, FluidObject } from 'gatsby-image'
import styled from '@emotion/styled'
import { sampleBase64 } from "../../utils/sampleBase64"
import ClickableIcon from "../Atoms/ClickableIcon"
import github from "../../images/icon_github.svg"
import discord from "../../images/icon_discord.svg"
import down from "../../images/icon_down.svg"
import OutlineButton from "../Atoms/OutlineButton"
import ClickableCta from "../Molecules/ClickableCta"
import LearnMore from "../Molecules/LearnMore"

type HeroProps = {
    title: string,
    text: string,
    logoImg: FluidObject,
    icon1: FixedObject,
    icon2: FixedObject,
}

const defaultProps = {
    title: "Title",
    text: "Lorem ipsum",
    logoImg: sampleBase64,
    icon1: sampleBase64,
    icon2: sampleBase64
}

const Container = styled.div`
    height: 100%;
`
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

const CTAs = styled.div`
    display: flex;
    flex-direction: row;

    & > a {
        margin-right: 1rem

        & > div {
            width: 180px
        }
    }
`

const Hero = ({ title, text, logoImg, icon1, icon2 }: HeroProps) => (
    <Container>
        <HeroContainer>
            <div style={{width: `100%`, maxWidth: `575px`}}>
                <Img fluid={logoImg} />
            </div>
            <HeroTextContainer>
                <Title>{title}</Title>
                <HeroText>{text}</HeroText>
                <CTAs>
                    <ClickableCta
                        text="Contribute"
                        link="https://link.com"
                        icon={github}
                        color={'var(--color-neonGreen)'}
                    ></ClickableCta>
                    <ClickableCta
                        text="Join us"
                        link="https://link.com"
                        icon={discord}
                        color={'var(--color-neonGreen)'}
                    ></ClickableCta>               
                </CTAs>
            </HeroTextContainer>
        </HeroContainer>
        <LearnMore/>
    </Container>
)

Hero.defaultProps = defaultProps
export default Hero