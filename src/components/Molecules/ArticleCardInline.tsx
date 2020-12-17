import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import SmallButton from "../Atoms/SmallButton"

type ArticleCardProps = {
  title: string
}

const defaultProps = {
  title: "Lorem Ipsum",
}

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-veryDarkPurple);
  h2 {
    text-transform: uppercase;
    font-weight: 400;
    margin-right: 3rem;
  }
  padding: 2rem 3rem;
  margin-top: 1rem;
`

const ArticleCardInline = ({ title }: ArticleCardProps): ReactElement => (
  <CardContent>
    <h2>{title}</h2>
    <SmallButton link={"https://link.com"}></SmallButton>
  </CardContent>
)

ArticleCardInline.defaultProps = defaultProps
export default ArticleCardInline
