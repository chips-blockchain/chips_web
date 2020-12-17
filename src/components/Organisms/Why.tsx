import React from "react"
import styled from "@emotion/styled"
import ArticleCard from "../Molecules/ArticleCard"
import breakpoints from "../../styles/breakpoints"
import { ArticleCardProps } from "../Molecules/ArticleCard"
import Img, { FluidObject } from "gatsby-image"

const WhySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: normal;
    justify-content: space-between;
    width: 100%;
  }
`
const ImageWrapper = styled.div`
  width: 500px;
  margin: auto;
  @media(max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

type WhyProps = {
  cards: Array<ArticleCardProps>
  header: FluidObject
}

const defaultProps = {
  cards: [],
}

const Why = ({ cards, header }: WhyProps) => {
  return (
    <WhySection>
      <ImageWrapper>
        <Img fluid={header}></Img>
      </ImageWrapper>
      {cards.map((card, key) => (
        <ArticleCard
          title={card.title}
          key={key}
          text={card.text}
          orientation={key % 2 == 1}
          themeImage={card.themeImage}
          link={card.link}
          theme={card.theme}
        />
      ))}
    </WhySection>
  )
}

Why.defaultProps = defaultProps
export default Why
