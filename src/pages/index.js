import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from "gatsby-background-image";

import Layout from "../templates/Layout"
import Header from "../components/Organisms/Header"
import Hero from "../components/Organisms/Hero"
import About from "../components/Organisms/About"
import Why from "../components/Organisms/Why"
import PokerDapp from "../components/Organisms/PokerDapp"
import { menuLinks } from "../data/menuLinks"
import { getImageData } from "../utils/dataHelper"
import whatischips from "../images/text/text_whatischips.svg"
import whychips from "../images/text/text_whychips.svg"
import Development from "../components/Organisms/Development"
import { cards } from "../data/cardsData"
import { benefitsData } from "../data/benefitsData.jsx"
import { pokerDappData } from "../data/pokerDappData"
import { devLinks } from "../data/devLinks"

export default function Home({data}) {
  console.log(benefitsData)
  return (
    <Layout>
      <BackgroundImage
          Tag="section"
          fluid={data.headerImage.childImageSharp.fluid}
          style={{minHeight: '100vh'}}>
          <Header 
            logoImage={data.logoText.childImageSharp.fixed}
            menuLinks={menuLinks}
          />
          <Hero 
            title={'CHIPS revolutionises online gambling'}
            text={'The project aims to create truly decentralized, trustless, peer-to-peer, and secure blockchain casino-style games.'}
            logoImage={data.logo.childImageSharp.fluid}
        />
        </BackgroundImage>
        <About 
          header={whatischips} 
          benefits={getImageData(data, benefitsData)}
          />
        <Why 
          header={whychips} 
          cards={cards}
          />
        <PokerDapp
          data={getImageData(data, pokerDappData)}
        />
        <Development
          data={devLinks} 
        />
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
    headerImage: file(relativePath: { eq: "bg/header_clean.png"}) {
      childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
          }
      }
    },
    logoText: file(relativePath: { eq: "chips_logo_text.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 200, height: 66) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 30, height: 30) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    discord: file(relativePath: { eq: "discord.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 30, height: 30) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    benefitSecure: file(relativePath: { eq: "benefits/benefit_secure220.png" }) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },    
    benefitShortTime: file(relativePath: { eq: "benefits/benefit_short_wait_times220.png" }) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },    
    benefitRealTime: file(relativePath: { eq: "benefits/benefit_real_time_betting220.png" }) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },    
    benefitBtcTech: file(relativePath: { eq: "benefits/benefit_btc_tech220.png" }) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    pokerdapp: file(relativePath: { eq: "pokerdapp/pokerdapp.jpg" }) {
      childImageSharp {
        fluid(quality: 90,  maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    deposit: file(relativePath: { eq: "pokerdapp/deposit.png" }) {
      childImageSharp {
        fluid(quality: 90,  maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },    
    preflop: file(relativePath: { eq: "pokerdapp/pre_flop.png" }) {
      childImageSharp {
        fluid(quality: 90,  maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    ui: file(relativePath: { eq: "pokerdapp/ui.png" }) {
      childImageSharp {
        fluid(quality: 90,  maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`