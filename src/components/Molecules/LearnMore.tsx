import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import down from "../../images/icon_down.svg"

type LearnMoreProps = {
    text: string
}

const defaultProps = {
    text: 'Learn more'
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    & > a {
        color: var(--color-almostWhite);
        font-size: var(--font-size-h3);
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        display: block;
    }

    & > img {
        margin: auto;
    }
`

const LearnMore = ({ text }: LearnMoreProps): ReactElement => (
    <Container>
        <a href="#">{text}</a>
        <img src={down}></img>
    </Container>
)

LearnMore.defaultProps = defaultProps
export default LearnMore