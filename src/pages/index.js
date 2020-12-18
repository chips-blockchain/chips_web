import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../templates/Layout"
import Header from "../components/Organisms/Header"
import Hero from "../components/Organisms/Hero"
import About from "../components/Organisms/About"
import Why from "../components/Organisms/Why"
import PokerDapp from "../components/Organisms/PokerDapp"
import { menuLinks } from "../data/menuLinks"
import { getImageData } from "../utils/dataHelper"
import Development from "../components/Organisms/Development"
import { cards } from "../data/cardsData"
import { benefitsData } from "../data/benefitsData.jsx"
import { pokerDappData } from "../data/pokerDappData"
import { devLinks } from "../data/devLinks"

export default function Home({ data }) {
  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        fluid={data.headerImage.childImageSharp.fluid}
        style={{ minHeight: "100vh", maxWidth: '100vw' }}
      >
        <Header
          logoImage={data.logoText.childImageSharp.fixed}
          menuLinks={menuLinks}
        />
        <Hero
          title={"CHIPS revolutionises online gambling"}
          text={
            "The project aims to create truly decentralized, trustless, peer-to-peer, and secure blockchain casino-style games."
          }
          logoImage={data.logo.childImageSharp.fluid}
        />
      </BackgroundImage>
      <About
        header={data.textWhatIsChips.childImageSharp.fluid}
        benefits={getImageData(data, benefitsData)}
      />
      <Why header={data.textWhyChips.childImageSharp.fluid} cards={cards} />
      <PokerDapp
        header={data.textPokerDapp.childImageSharp.fluid}
        data={getImageData(data, pokerDappData)}
      />
      <Development
        header={data.textDevelopment.childImageSharp.fluid}
        data={devLinks}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "chips_logo_chip.png" }) {
      childImageSharp {
        fluid(maxWidth: 575, maxHeight: 563) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    headerImage: file(relativePath: { eq: "bg/header_clean.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logoText: file(relativePath: { eq: "chips_logo_text.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 200, height: 66) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    benefitSecure: file(
      relativePath: { eq: "benefits/benefit_secure220.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    benefitShortTime: file(
      relativePath: { eq: "benefits/benefit_short_wait_times220.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    benefitRealTime: file(
      relativePath: { eq: "benefits/benefit_real_time_betting220.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    benefitBtcTech: file(
      relativePath: { eq: "benefits/benefit_btc_tech220.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, height: 220, width: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    pokerdapp: file(relativePath: { eq: "pokerdapp/pokerdapp.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    deposit: file(relativePath: { eq: "pokerdapp/deposit.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    preflop: file(relativePath: { eq: "pokerdapp/pre_flop.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ui: file(relativePath: { eq: "pokerdapp/ui.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    textWhatIsChips: file(relativePath: { eq: "text/whatischips.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    textWhyChips: file(relativePath: { eq: "text/whychips.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    textDevelopment: file(relativePath: { eq: "text/development.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    textPokerDapp: file(relativePath: { eq: "text/pangeapokerdapp.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
