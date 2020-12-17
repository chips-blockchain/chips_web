import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import icons from "../../data/icons"

type LearnMoreProps = {
    text: string,
    goToClassName: string
}

const defaultProps = {
    text: 'Learn more',
    goToClassName: 'whatischips'
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
    & > a:hover {
        color: var(--color-neonGreen);
    }
`

const LearnMore = ({ text, goToClassName }: LearnMoreProps): ReactElement => (
    <Container>
        <a href={'#'.concat(goToClassName)}>{text}</a>
        <img src={icons.down}></img>
    </Container>
)

LearnMore.defaultProps = defaultProps
export default LearnMore