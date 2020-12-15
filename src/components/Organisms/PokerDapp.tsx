import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import ImageWithText, { ImageWithTextProps } from "../Molecules/ImageWithText"
import breakpoints from "../../styles/breakpoints"
import pangeaDappHeader from "../../images/text/text_pangeapokerdapp.svg"


type PokerDappProps = {
    header: string,
    data: Array<ImageWithTextProps>
}

const defaultProps = {
    header: pangeaDappHeader,
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
    @media(max-width: ${breakpoints.tablet}) {
        width: 500px;
    }    
    @media(max-width: ${breakpoints.mobile}) {
        width: 100%;
    }
`

const PokerDapp = ({ header, data } : PokerDappProps ) : ReactElement => {
  return (
      <Container>
        <HeaderImageWrapper>
            <img src={header}></img>
        </HeaderImageWrapper>
        {data.map(one => 
            <ImageWithText 
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