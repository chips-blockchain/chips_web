import React from "react"
import styled from "@emotion/styled"
import ArticleCard from "../Molecules/ArticleCard"
import { FixedObject, FluidObject } from "gatsby-image"
import Img from 'gatsby-image'

const WhySection=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;

    img {
        height: 50px;
    }
`

type ArticleCard = {
    title: string,
    text: string,
    themeImage: string
}

type WhyProps = {
    cards: Array<ArticleCard>,
    header: FluidObject
}


const defaultProps = {
    cards: [
        {
            title: "You hold your own funds",
            themeImage: 'machine',
            text: "Using CHIPS to play Pangea poker offers the first non-custodial online gaming experience. Unlike other online poker platforms, CHIPS uses actual blockchain technology to run p2p nodes. So when you play, you never have to send funds to a third party. You remain in control of your own private keys at all times."
        },
        {

            title: "Trustless Gambling",
            themeImage: 'coin',
            text: "Decentralized, open-sourced software & technology is the backbone of the CHIPS poker application, Pangea Poker. The CHIPS currency will not only be used to play poker: it will be at the centre of multiple decentralized casino games."
        },
        {
            title: "Low FEES & OPTIMAL SPEED",
            themeImage: 'cards',
            text: "Using CHIPS Lightning Network means numerous bets (transactions) can be placed without paying a fee each time; instead the final payout is settled on-chain with a low fee once the hand is complete.  It also means players can play real-time poker with no delays between placing the bet and processing it." 
        }
    ]
}

export default function Why({ cards, header }: WhyProps) {
  return (
        <WhySection>
            <div style={{width: `100%`, maxWidth: `800px`}}>
                <Img fluid={header}></Img>
            </div>
            {cards.map((card, key) => (
              <ArticleCard
                title={card.title}
                key={key}
                text={card.text}
                orientation={key%2==0}
                themeImage={card.themeImage}
              />
            ))}
          </WhySection>
    )
}

Why.defaultProps = defaultProps