import React, { ReactElement } from "react"

import OutlineButton from "../Atoms/OutlineButton"
import styled from "@emotion/styled"

type ClickableCtaProps = {
  text: string
  icon: string
  link: string
}

const defaultProps = {
  text: "CHAT",
  link: "https://chat.com",
  color: "#FFFFFF",
  icon: "",
}

const Container = styled.div`
  margin-top: 1rem;
  & > a > div {
    width: 160px;
    padding: 0.5rem 1rem;
    margin-right: 1.5rem;
    border: solid 1px var(--color-almostWhite);
    font-weight: bold;
    transition: transform .3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  & > a > div > img { 
    margin-left: 1rem;
  }
`

const ClickableCta = ({
  text,
  icon,
  link,
}: ClickableCtaProps): ReactElement => (
  <Container>
    <OutlineButton text={text} icon={icon} link={link} />
  </Container>
)

ClickableCta.defaultProps = defaultProps
export default ClickableCta
