import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import breakpoints from "../../styles/breakpoints"

type InfoBannerProps = {
    title: string,
    text: string
}

const defaultProps = {
    title: "Want to contribute?",
    text: "We are an open source project and we have very limited development capacity and funds. Whether you would like to contribute your time, funds or simply say hello, please join our Discord. Reach out to NutellaLicka or daria with any inquiries."
}
const Container = styled.div`
    border: 7px solid var(--color-purple);
    box-sizing: border-box;
    padding: 1rem 3rem;
    width: 700px;
    background-color: var(--color-darkPurple);
    
    & > h2 {
        color: var(--color-neonBlue);
        text-transform: uppercase;
    }
    p {
        font-family: var(--font--family-secondary);
        font-size: var(--font-size-h4);
    }
    @media(max-width: ${breakpoints.mobile}) {
        width: 390px;
    }
`

const InfoBanner = ({ title, text }: InfoBannerProps): ReactElement => (
    <Container>
       <h2>{title}</h2>
       <p>{text}</p>
    </Container>
)

InfoBanner.defaultProps = defaultProps
export default InfoBanner