import React from "react"
import styled from "@emotion/styled"
import ArticleCard from "../Molecules/ArticleCard"
import { FixedObject } from "gatsby-image"

const WhySection=styled.div`
    display: flex;
    justify-content: center;
`

type ArticleCard = {
    title: string,
    text: string,
    image: FixedObject
}

type WhyProps = {
    cards: Array<ArticleCard>
}


const defaultProps = {
    cards: [
        {
            title: "You hold your own funds",
            text: "Trustless, open sourced, software and technology is the backbone of the CHIPS poker application, Pangea Poker. Coupled with Komodo's dPoW security mechanism, you can play safe knowing each hand you play cannot be altered, undone, or tampered with."
        }
    ]
}

export default function Why({ cards }: WhyProps) {
  return (
        <WhySection>
            {cards.map((card, key) => (
              <ArticleCard
                title={card.title}
                key={key}
                text={card.text}
                image={card.image}
              />
            ))}
          </WhySection>
    )
}

Why.defaultProps = defaultProps