import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import ClickableIcon from "../Atoms/ClickableIcon"
import githubIcon from "../../images/icon_github.svg"
import breakpoints from "../../styles/breakpoints"

type RepositoryProps = {
    repositoryLink: string,
    title: string,
    text: string
}

const defaultProps = {
    repositoryLink: "https://github.com/chips-blockchain/",
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit. Lobortis sceler.",
    icon: true
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    & > h2 {
        text-transform: uppercase;
    }
`
const RepoName = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    & > p {
        margin: 0;
    }
    & > h2 {
        margin-bottom: 0;
    }
    &:hover {
        & > h2 {
            color: var(--color-neonGreen);
            text-decoration: underline;
        }
    }
    @media(max-width: ${breakpoints.mobile}) {
        & > h2 {
            // color: var(--color-neonGreen);
            text-decoration: underline;
        }
    }    
`
const ExtraInfo = styled.p`
    color: var(--color-gray);
    margin-left: 1rem;
    font-style: italic;
`

const Repository = ({ repositoryLink, title, extraInfo, icon }: RepositoryProps): ReactElement => (
    <Container>
        {icon && <ClickableIcon icon={githubIcon} link={repositoryLink}></ClickableIcon>}
        <RepoName href="repositoryLink">
            <h2>{title}</h2>        
            <ExtraInfo>{extraInfo}</ExtraInfo>
        </RepoName>
    </Container>
)

Repository.defaultProps = defaultProps
export default Repository