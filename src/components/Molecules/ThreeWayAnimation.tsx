import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import Img, { FixedObject } from "gatsby-image"
import { sampleBase64 } from "../../utils/sampleBase64"
import { graphql, StaticQuery } from "gatsby"

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

const Container = styled.div`
    position: relative;
    li { 
        position: absolute;
    }
`

const ThreeWayAnimation = ({  }): ReactElement => (

    <StaticQuery
        query={
            graphql`
                query {
                    part1: file(relativePath: { eq: "card_chips_chip.png" }) {
                        childImageSharp {
                            fixed(quality: 90) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    part2: file(relativePath: { eq: "card_chips_dice.png" }) {
                        childImageSharp {
                            fixed(quality: 90) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    part3: file(relativePath: { eq: "card_chips_gold.png" }) {
                        childImageSharp {
                            fixed(quality: 90) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    }                                       
                }`
            }
        render={data => (
        <Container>
            <ul>
                <li><Img fixed={data.part1.childImageSharp.fixed}/></li>                
                <li><Img fixed={data.part2.childImageSharp.fixed}/></li>
                <li><Img fixed={data.part3.childImageSharp.fixed}/></li>
            </ul>
        </Container>
        )}
    />
    )


ThreeWayAnimation.defaultProps = defaultProps
export default ThreeWayAnimation