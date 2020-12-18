import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import ClickableIcon from "../Atoms/ClickableIcon"
import icons from "../../data/icons"
import breakpoints from "../../styles/breakpoints"
import { title, subtitle, text } from "../../utils/lorem"
import links from "../../data/links"

type RepositoryProps = {
  link: string
  title: string
  description: string
  text: string
  icon: boolean
}

const defaultProps = {
  link: links.chipsproject,
  title: title,
  description: subtitle,
  text: text,
  icon: true,
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
  @media (max-width: ${breakpoints.mobile}) {
    & > h2 {
      text-decoration: underline;
    }
  }
`
const ExtraInfo = styled.p`
  color: var(--color-gray);
  margin-left: 1rem;
  font-style: italic;
`

const Repository = ({
  link,
  title,
  description,
  icon,
}: RepositoryProps): ReactElement => (
  <Container>
    {icon && <ClickableIcon icon={icons.github} link={link}></ClickableIcon>}
    <RepoName href={link}>
      <h2>{title}</h2>
      <ExtraInfo>{description}</ExtraInfo>
    </RepoName>
  </Container>
)

Repository.defaultProps = defaultProps
export default Repository
