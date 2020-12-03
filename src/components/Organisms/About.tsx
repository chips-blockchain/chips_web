import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Navigation from "../Molecules/Navigation"
import { css } from '@emotion/core'
import styled from "@emotion/styled"
import BenefitCard from "../Molecules/BenefitCard"

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 9rem;
  height: 100%;
`

const ChipsLink = styled.a`
  color: var(--color-neonPink)
`

const PangeaLink = styled.a`
  color: var(--color-neonGreen)
`
const Description = styled.p`
  margin-top: 3rem;
  color: var(--color-almostWhite);
  font-size: var(--font-size-h1);
  text-align: center;
  line-heigth: var(--line-height-1);
`

const BenefitsSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  background-color: var(--color-veryDarkPurple);
  opacity: 1;
  padding: 1rem;
`

export default function About({ header, benefits}) {
  return (
      <AboutSection>
          <Img fixed={header}></Img>
          <Description>
            <ChipsLink href="#">CHIPS</ChipsLink> is a cryptocurrency used to play poker games <br/> 
            powered by the <PangeaLink href="#">Pangea Protocol</PangeaLink>.
          </Description>
          <BenefitsSection>
            {benefits.map((benefit, key) => (
              <BenefitCard
                image={benefit.image}
                key={key}
              />
            ))}
          </BenefitsSection>
      </AboutSection>
    )
}