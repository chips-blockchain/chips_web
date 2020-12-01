import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Navigation from "../Molecules/Navigation"
import { css } from '@emotion/core'

const style = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1600px;
  margin: auto;

`
export default function Header({ logoImage, menuLinks }) {
  return (
      <header css={style}>
        <Link to="/">
          <Img fixed={logoImage} alt="Logo" />
        </Link>
       <Navigation
          menuLinks={menuLinks}
       ></Navigation>
      </header>
    )
}