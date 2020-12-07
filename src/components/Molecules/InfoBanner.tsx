import React, { ReactElement } from "react"
import styled from '@emotion/styled'

type InfoBannerProps = {
    title: string,
    text: string
}

const defaultProps = {
    title: "Want to contribute?",
    text: "We are an open source project and we have very limited development capacity and funds. Whether you would like to contribute your time or funds reach out to us. Please feel free to join our Discord and reach out to NutellaLicka, sg777 and daria."
}
const Container = styled.div`
    border: 3px solid var(--color-neonBlue);
    box-sizing: border-box;
    padding: 1rem 3rem;
    width: 1200px;
    background-image: url("../../images/table_bg.svg");

    & > h1 {
        font-size: var(--font-size-massive);
        color: var(--color-neonBlue);
    }
    p {
        font-family: var(--font--family-secondary);
        font-size: var(--font-size-h2)
    }
`

const InfoBanner = ({ title, text }: InfoBannerProps): ReactElement => (
    <Container>
       <h1>{title}</h1>
       <p>{text}</p>
    </Container>
)

InfoBanner.defaultProps = defaultProps
export default InfoBanner