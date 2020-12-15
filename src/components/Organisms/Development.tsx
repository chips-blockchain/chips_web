    import React from "react"
import styled from '@emotion/styled'
import Repository from "../Molecules/Repository"
import development from "../../images/text/text_development.svg"
import InfoBanner from "../Molecules/InfoBanner"
import breakpoints from "../../styles/breakpoints"

type DevelopmentProps = {
}

const defaultProps = {
}

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    padding: 7rem 10rem;
    background-size: cover; 
    background-repear: no-repeat;
`
const Repositories=styled.div`
    display: flex;
    flex-direction: column;
    & > h1 {
        color: var(--color-neonBlue);
    }
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    @media(max-width: ${breakpoints.mobile}) {
        &:nth-of-type(2) {
            margin-left: 5.5rem;
        }
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    margin-top: 3rem;
    justify-content: space-between;
    width: 700px;
    @media(max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        width: 390px;
    }
`

const AlphaNote = styled.div`
    text-transform: uppercase;
    color: #C5AFFF;
    width: 700px;
    margin: 3rem 0 2rem 0;
    @media(max-width: ${breakpoints.mobile}) {
        width: 390px;
        padding-left: 1rem;
    }
`
const ImageWrapper = styled.div`
    width: 700px;
    @media(max-width: ${breakpoints.mobile}) {
        width: 400px;
    }
`

const Development = ({  }: DevelopmentProps) => (
    <Container id="development">
            <ImageWrapper>
                <img src={development}></img>
            </ImageWrapper>
            <Content>
                <Repositories>
                    <Repository title={"MANUAL INSTALLATION"}  extraInfo={"for tech savvy"}></Repository>
                    <Repository title={"PRE ALPHA TUTORIAL"} extraInfo={"for extra curious"}></Repository>
                    <Repository title={"BET"} extraInfo={"backend repository in C"}></Repository>
                    <Repository title={"POKER GUI"} extraInfo={"React based GUI"}></Repository>
                    <Repository title={"DOCKER"} extraInfo={"Dockerized backend for the project"}></Repository>
                </Repositories>
                <Repositories>
                    <Repository icon={false} title={"PANGEA WHITE PAPER"} extraInfo={"Co-written by jl777 and sg777"}></Repository>
                    <Repository icon={false} title={"CHIPS FAQ"} extraInfo={"All you want to know"}></Repository>
                    <Repository icon={false} title={"DISCORD"}  extraInfo={"Join join join us!"}></Repository>
                </Repositories> 
            </Content>       
            <AlphaNote>The official alpha version has not been released yet. For more information on the project updates please follow our announcements in Discord and Twitter.</AlphaNote>    
            <InfoBanner></InfoBanner>
    </Container>
)

Development.defaultProps = defaultProps
export default Development