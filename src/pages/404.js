import React from "react"
import styled from "@emotion/styled"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const NotFoundStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    text-align: center;

    & > h1 {
        color: var(--color-neonBlue);
    } 
    & > h3 {
        font-weight: 400;
    }

    & > h3:nth-of-type(2) {
        margin-bottom: 5rem;
    }

`

const NotFound = () => (
        <StaticQuery
            query={
                graphql`
                query{
                    logo: file(relativePath: { eq: "chips_logo_chip.png" }) {
                        childImageSharp {
                            fixed(quality: 90, width: 300) {
                            ...GatsbyImageSharpFixed_withWebp
                            }
                        }
                    }                    
                }`
            }
            render={data => 
                <NotFoundStyled>
                <Img fixed={data.logo.childImageSharp.fixed}></Img>
                <h1>WHOOPS. <br/> This is awkward.</h1>
                <h3>There is nothing to see here, <br /> just a few messy chips laying around.</h3>
          
                <h3><a href="/">Go back</a></h3>
              </NotFoundStyled>
            }
    />
)

export default NotFound