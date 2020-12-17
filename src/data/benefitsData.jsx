import React from "react"
import links from "../data/links"

export const benefitsData = [
  {
    image: "benefitSecure",
    title: "High level Security",
    text: [
      "CHIPS is secured by Komodo’s ",
      <a href={links.dpow}>dPOW </a>,
      " (delayed proof-of-work) and ",
      <a href={links.apow}>aPOW</a>,
      " (adaptive proof-of-work) security mechanisms. With dPOW, every hand of Pangea Poker you play is protected by Bitcoin’s hash rate. Using aPOW, CHIPS blockchain is secured against difficulty stranding.",
    ],
  },
  {
    image: "benefitRealTime",
    title: "Peer to peer transactions",
    text: [
      "Combining CHIPS with ",
      <a href="#pokerdapp">Pangea Poker dAPP</a>,
      " allows users to interact directly in a secure, trustless form of gaming. It creates a decentralized gaming technology which revolutionizes the way players can connect autonomously for a virtual poker experience.",
    ],
  },
  {
    image: "benefitBtcTech",
    title: "Powered by Bitcoin",
    text:
      "Bitcoin technology powers CHIPS, the currency used to bet in Pangea Poker. CHIPS runs on the Lightning Network technology to enable real-time, fee-less betting.",
  },
  {
    image: "benefitShortTime",
    title: "Seamless betting",
    text: [
      "Each bet in a poker hand is a transaction. On-chain this processing time would make p2p decentralized poker too slow and expensive.  Using CHIPS, bets are placed in ",
      <a href={links.chipsAndLn}>
        real time through Lightning Network channels
      </a>,
      ", so there is no time delay, with minimal fees. Transactions are settled on-chain after each hand.",
    ],
  },
]
