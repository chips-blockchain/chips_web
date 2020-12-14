import React from "react"
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import ImageWithText from "../Molecules/ImageWithText"
import breakpoints from "../../styles/breakpoints"

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    padding-bottom: 5rem;
    @media(max-width: ${breakpoints.mobile}) {
        padding-bottom: 0;
    }
`
const HeaderImageWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
    @media(max-width: ${breakpoints.tablet}) {
        width: 500px;
    }    
    @media(max-width: ${breakpoints.mobile}) {
        width: 350px;
    }
`

export default function PokerDapp({ header, pokerdapp, deposit, preflop, ui }) {
  return (
      <Container>
        <HeaderImageWrapper>
            <img src={header}></img>
        </HeaderImageWrapper>
        <ImageWithText 
            image={preflop}
            title={'FIRST OF ITS KIND'}
            subtitle={'Pangea Poker is a truly decentralized, peer-to-peer gaming technology.'}
            text={'It is the result of complex mathematics & software development with cryptocurrency implementation.  The purpose is to build a new form of online poker experience which  is trustless, secure, and immutable.  CHIPS & Pangea Poker carry Bitcoin’s principles forward into a new dimension of online gaming.'}
        />
        <ImageWithText 
            image={pokerdapp}
            title={'SECURE DECK SHUFFLING'}
            subtitle={'Pangea poker uses a p2p cyrptographic function for deck shuffling and allocation, plus CHIPS technology, to create a real-time betting platform that is tamper-proof.'}
            text={'Pangea poker is an advanced application that solves the problems of trustless poker. Coupled with Komodo’s dPOW security mechanism, you can play safe knowing each hand cannot be altered, undone, or tampered with.'}
        />     
        <ImageWithText 
            image={deposit}
            title={'PLAY USING CHIPS'}
            subtitle={'Pangea uses CHIPS to play the poker games.'}
            text={'CHIPS enables decentralised, peer-to-peer, trustless, on-the-blockchain, casino style games. You can deposit and withdraw CHIPS to/from your game wallet. Transactions come through within a couple of minutes. You can always see your current balance in the Cashier. '}
        />  
        <ImageWithText 
            image={ui}
            title={'Beautiful UI'}
            subtitle={'Pangea Poker GUI offers easy to use and eye pleasing user experience.'}
            text={'We take a lot of pride in our GUI design which was crafted with love by @pixelshove and is continuously getting love from @daria now. We are planning to integrate many more different themes for the game, from classical to futuristic.'}
        />                     
      </Container>
    )
}