import React from "react"
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import breakpoints from "../../styles/breakpoints"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    margin-top: 2rem;
    @media(max-width: ${breakpoints.tablet}) {
        flex-direction: column;
    }
`

const ImageWrapper = styled.div`
    width: 600px;
    border: 5px solid var(--color-neonGreen);
    box-sizing: border-box;
`

const Text = styled.div`
    border-left: 1px solid white;
    width: 500px;
    height: 100%;
    padding:0 1rem;
    margin-left: 2rem;

    p {
        font-size: var(--font-size-p);
        opacity: 0.8;
        margin-bottom: 0;
        @media(max-width: ${breakpoints.mobile}) {
            display: none;
        }
    }
    h1 {
        margin-top: 0;
    }
    h3 {
        font-weight: 400;
        font-family: var(--font--family-secondary);
    }

    @media(max-width: ${breakpoints.tablet}) {
        margin-left: 0;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export default function ImageWithText({ title, subtitle, text, image }) {
  return (
        <Container>
            <ImageWrapper>
                <Img fluid={image}></Img>
            </ImageWrapper>
            <Text>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </Text>
        </Container>   
    )
}