import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import HeaderBackground from "../components/HeaderBackground"
import StyledHeader from "../components/Organisms/Header.tsx"
import styled from '@emotion/styled'

import "./index.module.css"
import "../components/layout.css"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "chips_logo_chip.png" }) {
      childImageSharp {
        fluid(maxWidth: 575, maxHeight: 563) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function Home({data}) {
  return (
    <Layout>
      <HeaderBackground>
        <StyledHeader />
        <HeaderContainer>
          <div style={{width: `100%`, maxWidth: `1000px`, margin: `auto`}}>
            <Img style={{ maxWidth: `575px`}} fluid={data.logo.childImageSharp.fluid} />
          </div>
          <div className="headerText">
            <h1>CHIPS revolutionises online gambling</h1>
            <p>The project aims to bring truly decentralized, trust-less, peer-to-peer, and secure, blockchain casino style games.</p>
          </div>
        </HeaderContainer>
      </HeaderBackground>
    </Layout>
  )
}