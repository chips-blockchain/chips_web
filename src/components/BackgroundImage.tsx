import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ( { className, children }) => {
    const data = useStaticQuery(
        graphql`
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
    )

    // Set ImageData
    const imageData = data.desktop.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
            {children}

        </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    min-height: 400vh;
    background-size: cover;
    background-color: transparent;
`

export default StyledBackgroundSection

