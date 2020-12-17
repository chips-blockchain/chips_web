import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import ImageWithText, { ImageWithTextProps } from "../Molecules/ImageWithText"
import breakpoints from "../../styles/breakpoints"
import Img, { FluidObject } from "gatsby-image"


type PokerDappProps = {
    header: FluidObject,
    data: Array<ImageWithTextProps>
}

const defaultProps = {
    data: []
}


const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    padding-bottom: 5rem;
    @media(max-width: ${breakpoints.mobile}) {
        padding-bottom: 0;
    }
`
const HeaderImageWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;    
`

const PokerDapp = ({ header, data } : PokerDappProps ) : ReactElement => {
  return (
      <Container id="pokerdapp">
        <HeaderImageWrapper>
            <Img fluid={header}></Img>
        </HeaderImageWrapper>
        {data.map((one, key) => 
            <ImageWithText 
                key={key}
                image={one.image}
                title={one.title}
                subtitle={one.subtitle}
                text={one.text}
            />
        )}
      </Container>
    )
}

PokerDapp.defaultProps = defaultProps
export default PokerDapp