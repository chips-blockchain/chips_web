import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../templates/Layout"
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import Header from "../components/Organisms/Header"

import "./index.module.css"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const menuLinks = [
  {
    link: '#',
    name: 'About'
  },
  {
    link: '#',
    name: 'Development'
  },
  {
    link: '#',
    name: 'Community'
  },
  {
    link: '#',
    name: 'Articles'
  },
  {
    link: '#',
    name: 'FAQ'
  }            
]

export default function Home({data}) {
  return (
    <Layout>
        <Header 
          logoImage={data.logoText.childImageSharp.fixed}
          menuLinks={menuLinks}
          navigationColor={'var(--color-almostWhite)'}
        />
        <BackgroundImage
            Tag="section"
            fluid={data.bg.childImageSharp.fluid}
        />
        <HeaderContainer>
          <div style={{width: `100%`, maxWidth: `1000px`, margin: `auto`}}>
            <Img style={{ maxWidth: `575px`}} fluid={data.logo.childImageSharp.fluid} />
          </div>
          <div className="headerText">
            <h1>CHIPS revolutionises online gambling</h1>
            <p>The project aims to bring truly decentralized, trust-less, peer-to-peer, and secure, blockchain casino style games.</p>
          </div>
        </HeaderContainer>
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
    bg: file(relativePath: { eq: "bgx1.png"}) {
      childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
          }
      }
    },
    logoText: file(relativePath: { eq: "chips_logo_text.png" }) {
      childImageSharp {
        fixed(quality: 90, width: 200, height: 66) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`