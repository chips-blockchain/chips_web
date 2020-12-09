import React from "react"
import { graphql } from 'gatsby'
import logoText from "../images/chips_logo_text.svg"
import BackgroundImage from "gatsby-background-image";

import Layout from "../templates/Layout"
import Header from "../components/Organisms/Header"
import Hero from "../components/Organisms/Hero"
import About from "../components/Organisms/About"
import Why from "../components/Organisms/Why"
import PokerDapp from "../components/Organisms/PokerDapp"
import { menuLinks } from "../data/menuLinks"
import { getBenefitsData } from "../utils/dataHelper"
import dealerPlayer from "../images/dealer-player.svg"
import pangeaDappHeader from "../images/text_pangeapokerdapp.svg"
import whatischips from "../images/text_whatischips.svg"
import whychips from "../images/text_whychips.svg"
import Development from "../components/Organisms/Development"

export default function Home({data}) {
  return (
    <Layout>
      <BackgroundImage
          Tag="section"
          fluid={data.headerImage.childImageSharp.fluid}
          style={{minHeight: '100vh'}}>
          <Header 
            logoImage={logoText}
            menuLinks={menuLinks}
            navigationColor={'var(--color-almostWhite)'}
          />
          <Hero 
            title={'CHIPS revolutionises online gambling'}
            text={'The project aims to bring truly decentralized, trust-less, peer-to-peer, and secure, blockchain casino style games.'}
            logoImg={data.logo.childImageSharp.fluid}
        />
        </BackgroundImage>
        <About 
          header={whatischips} 
          benefits={getBenefitsData(data)}
          />
        <Why 
          header={whychips} 
          />
          <PokerDapp
            header={pangeaDappHeader}
            pokerdapp={data.pokerdapp.childImageSharp.fluid}
            dealerPlayer={dealerPlayer}
          />
          <Development></Development>
     </Layout>
  )
}

export const query =  graphql`
  query {
    logo: file(relativePath: { eq: "chips_logo_chip.png" }) {
      childImageSharp {
        fluid(maxWidth: 575, maxHeight: 563) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    headerImage: file(relativePath: { eq: "header_clean.png"}) {
      childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
          }
      }
    },
    logoText: file(relativePath: { eq: "chips_logo_text.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 200, height: 66) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    discord: file(relativePath: { eq: "discord.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    benefitSecure: file(relativePath: { eq: "benefit-secure.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    },    
    benefitShortTime: file(relativePath: { eq: "benefit-short-wait-times.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    },    
    benefitRealTime: file(relativePath: { eq: "benefit-real-time-betting.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    },    
    benefitBtcTech: file(relativePath: { eq: "benefit-btc-tech.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    pokerdapp: file(relativePath: { eq: "pokerdapp.jpg" }) {
      childImageSharp {
        fluid(quality: 90,  maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`