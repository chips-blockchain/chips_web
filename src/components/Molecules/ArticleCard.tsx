import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import Img, { FixedObject } from "gatsby-image"
import { sampleBase64 } from "../../utils/sampleBase64"
import { graphql, StaticQuery } from 'gatsby'
import Title from "../Atoms/Title"
import ThreeWayAnimation from "./ThreeWayAnimation"

type BenefitCardProps = {
    image: FixedObject,
    title: string,
    text: string
}

const defaultProps = {
    image: sampleBase64,
    title: "Lorem Ipsum",
    /* 180 characters */
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit. Lobortis sceler."
}

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    width: 900px;
    padding: 70px 100px 70px 100px;
    background-color: var(--color-veryDarkPurple);

     p, h1 {
        color: var(--color-almostWhite);
    }

    h1 {
        text-transform: uppercase;
        padding-bottom: 1rem;
    }

    p {
        font-size: var(--font-size-p);
        font-family: var(--font--family-secondary);
        line-height: var(--line-height-3);
        width: 500px;
    }
    button {
        width: 200px;
        height: 60px;
        margin-top: 2rem;
    }
`

const ArticleCard = ({ image, title, text }: BenefitCardProps): ReactElement => (

    <StaticQuery
        query={
            graphql`
                query {
                    del: file(relativePath: { eq: "delimiter-orange.png" }) {
                        childImageSharp {
                            fixed(quality: 90) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }`
            }
        render={data => (
        <ArticleContainer>
            <div>
                <h1>{title}</h1>
                <Img fixed={data.del.childImageSharp.fixed}></Img>
                <p>{text}</p>
                <button></button>
            </div>
            <div>
                <ThreeWayAnimation></ThreeWayAnimation>
            </div>
        </ArticleContainer>
        )}
    />
    )



ArticleCard.defaultProps = defaultProps
export default ArticleCard