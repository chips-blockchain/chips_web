import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Navigation from "../Molecules/Navigation"
import { css } from '@emotion/core'
import styled from "@emotion/styled"

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
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
  font-size: var(--font-size-h2);
  text-align: center;
  line-heigth: var(--line-height-1);
`

export default function About({ header}) {
  return (
      <AboutSection>
          <Img fixed={header}></Img>
          <Description>
            <ChipsLink href="#">CHIPS</ChipsLink> is a cryptocurrency used to play poker games <br/> 
            powered by the <PangeaLink href="#">Pangea Protocol</PangeaLink>.
          </Description>
      </AboutSection>
    )
}