import React from "react"
import styled from "@emotion/styled"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import links from "../data/links"

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
                <h1>Coming soon</h1>
                <h3>This is a work in progress <br /> Reach out on <a href={links.discord}>Discord</a> if you have any questions.</h3>
          
                <h3><a href="/">Go back</a></h3>
              </NotFoundStyled>
            }
    />
)

export default NotFound