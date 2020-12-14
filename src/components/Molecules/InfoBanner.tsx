import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import breakpoints from "../../styles/breakpoints"

type InfoBannerProps = {
    title: string,
    text: string
}

const defaultProps = {
    title: "Want to contribute?",
    text: "We are an open source project and we have very limited development capacity and funds. Whether you would like to contribute your time or funds reach out to us. Please feel free to join our Discord and reach out to NutellaLicka, sg777 and daria."
}
const Container = styled.div`
    border: 7px solid var(--color-purple);
    box-sizing: border-box;
    padding: 1rem 3rem;
    width: 700px;
    background-image: url("../../images/table_bg.svg");

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
       <p>We are an open source project and we have very limited development capacity and funds. Whether you would like to contribute your time or funds please reach out to us. ❤️ <br/><br/> Join our Discord and reach out to NutellaLicka, sg777 or daria.</p>
    </Container>
)

InfoBanner.defaultProps = defaultProps
export default InfoBanner