import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Navigation from "../Molecules/Navigation"
import { css } from '@emotion/core'
import styled from "@emotion/styled"

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    width: 1500px;
    align-items: center;
    justify-content: center;
`

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    border: 5px solid var(--color-neonGreen);
    box-sizing: border-box;
`

const HeaderImageWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-bottom: 3rem;
`

const Text = styled.div`
    width: 500px;
    padding-right: 4rem;

    p {
        font-size: var(--font-size-h3);
    }
    h1 {
        margin-top: 3rem;
        margin-bottom: 1rem;
        color: var(--color-neonPink);
    }
`

export default function PokerDapp({ header, pokerdapp }) {
  return (
      <Container>
        <HeaderImageWrapper>
            <Img fluid={header}></Img>
        </HeaderImageWrapper>
        <Content>
            <Text>
                <h1>FIRST OF ITS KIND</h1>
                <p>Pangea Poker is a truly decentralized, peer-to-peer gaming technology.  It is the result of complex mathematics & software development with cryptocurrency implementation.  The purpose is to build a new form of online poker experience which  is trustless, secure, and immutable.  CHIPS & Pangea Poker carry Bitcoin’s principles forward into a new dimension of online gaming.</p>
                <h1>SECURE DECK SHUFFLING</h1>
                <p>Pangea poker is an advanced application that solves the problems of trustless poker. It uses a p2p cyrptographic function for deck shuffling and allocation, plus CHIPS technology, to create a real-time betting platform that is tamper-proof.  Coupled with Komodo’s dPOW security mechanism, you can play safe knowing each hand cannot be altered, undone, or tampered with.</p>
            </Text>
            <ImageWrapper>
                <Img fluid={pokerdapp}></Img>
            </ImageWrapper>
        </Content>
      </Container>
    )
}