import React, { ReactElement } from "react"
import styled from "@emotion/styled"

type OutlineButtonProps = {
  text: string
  link: string
  icon: string
}

const defaultProps = {
  text: "CHAT",
  link: "https://chat.com",
}

const StyledButton = styled.div`
  width: 100px;
  height: 35px;
  text-transform: uppercase;
  color: var(--color-almostWhite);
  font-size: var(--font-size-p);
  font-family: var(--font--family-primary);
  border-radius: 5px;
  border: solid 2px var(--color-almostWhite);
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`

const OutlineButton = ({
  text,
  link,
  icon,
}: OutlineButtonProps): ReactElement => (
  <a href={link} style={{ textDecoration: "none" }}>
    <StyledButton>
      {text}
      {icon && <img src={icon} />}
    </StyledButton>
  </a>
)

OutlineButton.defaultProps = defaultProps
export default OutlineButton
