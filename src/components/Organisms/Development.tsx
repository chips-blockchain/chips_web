    import React from "react"
import styled from '@emotion/styled'
import Repository from "../Molecules/Repository"
import development from "../../images/text_development.svg"
import InfoBanner from "../Molecules/InfoBanner"

type DevelopmentProps = {
}

const defaultProps = {
}

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10rem 10rem;
`
const Content=styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

    & > p {
        font-size: var(--font-size-h2)
    }
`
const Repositories=styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    width: 1400px;
`

let text = `We are an open source project and we are always looking for contributors. 
Whether you would like to contribute your time or funds reach out to us.
Please feel free to join our Discord and reach out to NutellaLicka, sg777 and daria.`

const Development = ({  }: DevelopmentProps) => (
    <Container>
        <Content>
            <img style={{marginLeft: '-7.5rem', width: '1000px'}} src={development}></img>
            <p style={{width: '800px'}}>{text}</p>
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