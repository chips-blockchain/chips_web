import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import Img, { FixedObject } from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

type ThreeWayAnimationProps = {
    themeImage: string
}

const defaultProps = {
    themeImage: 'coin'
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 

    div { grid-area: 1 / 1 / 2 / 2; } 
    justify-items: center;
    align-items: center;
    padding: 1rem;
    
`

const ThreeWayAnimation = ({ themeImage }: ThreeWayAnimationProps): ReactElement => {
    return (
    <StaticQuery
        query={
            graphql`
                query {
                    coinPart1: file(relativePath: { eq: "card_chips_chip.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300, width: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    coinPart2: file(relativePath: { eq: "card_chips_dice.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300, width: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    coinPart3: file(relativePath: { eq: "card_chips_gold.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300, width: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    cardsPart1: file(relativePath: { eq: "card_rel_card.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300, width: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    cardsPart2: file(relativePath: { eq: "card_rel_chips.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300, width: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    cardsPart3: file(relativePath: { eq: "card_rel_dice.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300, width: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    machinePart1: file(relativePath: { eq: "card_safe_body.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    machinePart2: file(relativePath: { eq: "card_safe_coins.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    },
                    machinePart3: file(relativePath: { eq: "card_safe_glow.png" }) {
                        childImageSharp {
                            fixed(quality: 90, height: 300) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    }                                          
                }`
            }
        render={data =>  {
            return(
        <Container>
            <Img className="one" fixed={data[themeImage.concat('Part1')].childImageSharp.fixed}/>              
            <Img className="two" fixed={data[themeImage.concat('Part2')].childImageSharp.fixed}/>
            <Img className="three" fixed={data[themeImage.concat('Part3')].childImageSharp.fixed}/>
        </Container>
        )}}
    />
    )
        }

ThreeWayAnimation.defaultProps = defaultProps
export default ThreeWayAnimation