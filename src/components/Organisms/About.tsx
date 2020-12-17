import React from "react"
import styled from "@emotion/styled"
import BenefitCard from "../Molecules/BenefitCard"
import breakpoints from "../../styles/breakpoints"
import links from "../../data/links"
import Img from "gatsby-image"

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 9rem;
  height: 100%;
`

const Description = styled.p`
  margin-top: 2rem;
  color: var(--color-almostWhite);
  font-family: var(--font--family-secondary);
  font-size: var(--font-size-h2);
  text-align: center;
  line-heigth: var(--line-height-1);
`

const BenefitsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4rem;
  background-color: var(--color-veryDarkPurple);
  opacity: 1;
  align-items: baseline;


  @media(max-width: ${breakpoints.extra}) {
    justify-content: center;
  }

  // Border settings to move from vertical to a cross
  & > div {

    border-right: 1px solid var(--color-lightPurple);
    @media(max-width: ${breakpoints.extra}) {

      align-items: center;
      justify-content: center;
      width: 400px;
      height: 470px;
      &:nth-of-type(1), &:nth-of-type(2) {
        border-bottom:  1px solid var(--color-lightPurple);
      }
      &:nth-of-type(2) {
        border-right: none;
      }
    }
    @media(max-width: ${breakpoints.tablet}) {
      width: 350px;
      height: 510px;
    }    
    @media(max-width: 52rem) {
      width: 280px;
      height: 510px;
    }        
    @media(max-width: ${breakpoints.mobile}) {
      width: 100%;
      height: 100%;
      border: none;
      border-bottom: 1px solid var(--color-lightPurple);

      & > h2 {
        font-size: var(--font-size-h1);

      }
      & > p {
        font-size: var(--font-size-h4);
      }
    }
  } 

  & > div:last-child {
    border: none;
  }
`

export default function About({ header, benefits}) {
  return (
      <AboutSection id="whatischips">
          <Img style={{width: `100%`, maxWidth: `600px`}} fluid={header}></Img>
          <Description>
            <a href={links.chips}>CHIPS</a> is a cryptocurrency used to play poker games <br/>
            powered by the <a href={links.pangea}>Pangea Protocol</a>.
          </Description>
          <BenefitsSection>
            {benefits.map((benefit, key) => (
              <BenefitCard
                image={benefit.image}
                key={key}
                text={benefit.text}
                title={benefit.title}
              />
            ))}
          </BenefitsSection>
      </AboutSection>
    )
}