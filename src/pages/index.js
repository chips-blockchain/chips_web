import React from "react"
import { graphql } from 'gatsby'

import Layout from "../templates/Layout"
import BackgroundImage from 'gatsby-background-image'
import Header from "../components/Organisms/Header"
import Hero from "../components/Organisms/Hero"
import About from "../components/Organisms/About"
import Why from "../components/Organisms/Why"
import { menuLinks } from "../data/menuLinks"
import { getBenefitsData } from "../utils/dataHelper"

export default function Home({data}) {
  return (
    <Layout>
        <BackgroundImage
            Tag="section"
            fluid={data.headerImage.childImageSharp.fluid}
            style={{height: '900px'}}
        >
          <Header 
            logoImage={data.logoText.childImageSharp.fixed}
            menuLinks={menuLinks}
            navigationColor={'var(--color-almostWhite)'}
          />
          <Hero 
            title={'CHIPS revolutionises online gambling'}
            text={'The project aims to bring truly decentralized, trust-less, peer-to-peer, and secure, blockchain casino style games.'}
            logoImg={data.logo.childImageSharp.fluid}
            icon1={data.github.childImageSharp.fixed}
            icon2={data.discord.childImageSharp.fixed}
        />
        </BackgroundImage>
        <About 
          header={data.whatischips.childImageSharp.fixed} 
          benefits={getBenefitsData(data)}
          />
        <Why />
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
          fluid(quality: 90, maxWidth: 1920) {
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
    whatischips: file(relativePath: { eq: "whatischips.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 650, height: 90) {
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
  }
`