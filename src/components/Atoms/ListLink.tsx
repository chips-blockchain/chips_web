import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'

const li = css`
  display: 'inline-block';
  margin-right: "1rem";
`

const link = css`
  color: var(--color-almostWhite);
  text-decoration: none;
`

const ListLink = props => (
    <li css={li}>
      <Link css={link} to={props.to}>{props.children}</Link>
    </li>
)

export default ListLink