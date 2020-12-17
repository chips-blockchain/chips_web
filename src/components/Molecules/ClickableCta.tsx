import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import OutlineButton from "../Atoms/OutlineButton"

type ClickableCtaProps = {
    text: string,
    icon: string,
    link: string
}

const defaultProps = {
    text: "CHAT",
    link: "https://chat.com",
    color: "#FFFFFF",
    icon: ""
}


const Container = styled.div`
    & > a > div {
        width: 160px;
        padding: 0.5rem 1rem;
        margin-right: 1.5rem;
        border: solid 3px  var(--color-neonGreen);
        font-weight: bold;

        &:hover {
            background-color: var(--color-neonPink);
            text-decoration: underline;
        }
    }

    & > a > div > img {
        margin-left: 1rem
    }
`

const ClickableCta= ({ text, icon, link }: ClickableCtaProps): ReactElement => (
    <Container>
        <OutlineButton text={text} icon={icon} link={link}/>
    </Container>
)

ClickableCta.defaultProps = defaultProps
export default ClickableCta