import React from "react"
import styled from "@emotion/styled"
import ArticleCard from "../Molecules/ArticleCard"
import breakpoints from "../../styles/breakpoints"

const WhySection=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;

    @media(max-width: ${breakpoints.mobile}) {
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

type ArticleCard = {
    title: string,
    text: string,
    themeImage: string
}

type WhyProps = {
    cards: Array<ArticleCard>,
    header: string
}


const defaultProps = {
   cards: []
}

const Why = ({ cards, header }: WhyProps) => {
  return (
        <WhySection>
            <ImageWrapper>
              <img src={header}></img>
            </ImageWrapper>
            {cards.map((card, key) => (
              <ArticleCard
                title={card.title}
                key={key}
                text={card.text}
                orientation={key%2==1}
                themeImage={card.themeImage}
              />
            ))}
          </WhySection>
    )
}

Why.defaultProps = defaultProps
export default Why