import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import ClickableIcon from "../Atoms/ClickableIcon"
import githubIcon from "../../images/github.svg"

type RepositoryProps = {
    repositoryLink: string,
    title: string,
    text: string
}

const defaultProps = {
    repositoryLink: "https://github.com/chips-blockchain/",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit. Lobortis sceler."
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    margin-right: 10rem;
    & > p, h1 {
    }

    & > p {
        width: 550px;
        font-size: var(--font-size-h4);
        font-family: var(--font--family-secondary);
    }

`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

    & > a {
        padding: 0;
        padding-right: 1rem;
    }
    & > h1 {
        margin: 0;
    }
`

const ExtraInfo = styled.p`
    color: var(--color-neonBlue)
`

let text = `Bet is the implementation of the Pangea protocol which nees LN and CHIPS. The installation of LN and CHIPS must be done before proceeding to play with bet. The initial draft of the game written by jl777 is here.

If you would like to learn more please refer to the Pangea Protocol Whitepaper`

const Repository = ({ repositoryLink, title, extraInfo }: RepositoryProps): ReactElement => (
    <Container>
        <TitleWrapper>
            <ClickableIcon icon={githubIcon} link={repositoryLink}></ClickableIcon>
            <h1>{title}</h1>
        </TitleWrapper>
        
        <p>{text}</p>
        <ExtraInfo>{extraInfo}</ExtraInfo>
       
    </Container>
)

Repository.defaultProps = defaultProps
export default Repository