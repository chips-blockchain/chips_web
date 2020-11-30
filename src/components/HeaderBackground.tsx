import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import BackgroundImage from 'gatsby-background-image'

const HeaderBackground = ( { className, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "header_clean.png"}) {
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
        >
            {children}

        </BackgroundImage>
    )
}

const StyledHeaderBackground = styled(HeaderBackground)`
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-color: transparent;
    position: absolute;
    top: 0;
    z-index: -1;
`

export default StyledHeaderBackground

