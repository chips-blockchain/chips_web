import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core'

const style =  css`
    width: 100%;
    minHeight: 400vh;
    backgroundSize: "cover";
    backgroundColor: "transparent";
`

const q = graphql`
    query {
        desktop: file(relativePath: { eq: "bgx1.png"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
export default function BackgroundSection ( { className, children }) {
    const data = useStaticQuery(q)
    const imageData = data.desktop.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            style={style}
        >
            {children}

        </BackgroundImage>
    )
}