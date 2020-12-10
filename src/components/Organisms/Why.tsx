import React from "react"
import styled from "@emotion/styled"
import ArticleCard from "../Molecules/ArticleCard"

const WhySection=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
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
            <img style={{width: `500px`}} src={header}></img>
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