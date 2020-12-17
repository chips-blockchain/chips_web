import React from "react"
import Title from "../Atoms/Title"
import HeroText from "../Atoms/HeroText"
import Img, { FluidObject } from 'gatsby-image'
import styled from '@emotion/styled'
import { sampleBase64 } from "../../utils/sampleBase64"
import github from "../../images/icons/icon_github.svg"
import discord from "../../images/icons/icon_discord.svg"
import ClickableCta from "../Molecules/ClickableCta"
import LearnMore from "../Molecules/LearnMore"
import breakpoints from "../../styles/breakpoints"

type HeroProps = {
    title: string,
    text: string,
    logoImage: FluidObject
}

const defaultProps = {
    title: "Title",
    text: "Lorem ipsum",
    logoImage: sampleBase64
}

const Container = styled.div`
    height: 100%;
`
const HeroContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 5rem;    
    @media(max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        padding: 1rem;
    }
`

const HeroTextContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 5rem;
    @media(max-width: ${breakpoints.mobile}) {
        background: rgba(25, 7, 79, 0.7);
        padding: 2rem;
    }
`
const LogoWrapper = styled.div`
    width: 100%;
    minWidth: 200px;
    width: 575px;
    max-width: 575px;
    @media(max-width: ${breakpoints.mobile}) {
        width: 400px;
        margin: auto;
    }
`

const CTAs = styled.div`
    display: flex;
    flex-direction: row;

    & > a {
        margin-right: 1rem;

        & > div {
            width: 180px;
        }
    }
    @media(max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: left;
        & > div {
            margin: 0.5rem;
        }
    }
`

const Hero = ({ title, text, logoImage }: HeroProps) => (
    <Container>
        <HeroContainer>
            <LogoWrapper>
                <Img fluid={logoImage} />
            </LogoWrapper>
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