    import React from "react"
import styled from '@emotion/styled'
import Repository from "../Molecules/Repository"
import development from "../../images/text_development.svg"
import InfoBanner from "../Molecules/InfoBanner"
import brickbg from "../../images/bg_dev.svg"

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
    padding: 10rem 10rem;
    background-image: url(${brickbg});
    background-size: cover; 
    background-repear: no-repeat;
`
const Content=styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

    & > p {
        font-size: var(--font-size-h3);
        font-family: var(--font--family-secondary);
    }
`
const Repositories=styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 1000px;
`

let text = `We are an open source project and we are always looking for contributors. 
Whether you would like to contribute your time or funds reach out to us.
Please feel free to join our Discord and reach out to NutellaLicka, sg777 and daria.`

const Development = ({  }: DevelopmentProps) => (
    <Container>
        <Content>
            <img style={{marginLeft: '-1rem', width: '500px'}} src={development}></img>
            <p style={{width: '700px'}}>{text}</p>
            <Repositories>
                <Repository></Repository>
                <Repository extraInfo={"The official alpha version has not been released yet. For more information on project updates please follow announcements in Discord and Twitter."}></Repository>
                <Repository></Repository>
                <Repository></Repository>
            </Repositories>
            <InfoBanner></InfoBanner>
        </Content>
    </Container>
)

Development.defaultProps = defaultProps
export default Development