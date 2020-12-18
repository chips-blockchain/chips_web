import React, { ReactElement } from "react"
import Img, { FluidObject } from "gatsby-image"
import styled from "@emotion/styled"
import breakpoints from "../../styles/breakpoints"
import { title, subtitle, text } from "../../utils/lorem"

export type ImageWithTextProps = {
  image: FluidObject
  title: string
  subtitle: string
  text: string
}

const defaultProps = {
  image: "",
  title: title,
  subtitle: subtitle,
  text: text,
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  margin-top: 2rem;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    margin: 0;
  }
`

const ImageWrapper = styled.div`
  width: 600px;
  border: 5px solid var(--color-neonGreen);
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    width: 500px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 350px;
  }
`

const Text = styled.div`
  border-left: 1px solid white;
  width: 400px;
  height: 100%;
  padding: 0 1rem;
  margin-left: 2rem;

  p {
    font-size: var(--font-size-p);
    opacity: 0.8;
    margin-bottom: 0;
    @media (max-width: ${breakpoints.mobile}) {
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
  
  @media (max-width: ${breakpoints.extra}) {
    width: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 500px;
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 350px;
  }
`

const ImageWithText = ({
  title,
  subtitle,
  text,
  image,
}: ImageWithTextProps): ReactElement => {
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

ImageWithText.defaultProps = defaultProps
export default ImageWithText
