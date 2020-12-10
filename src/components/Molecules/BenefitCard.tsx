import React, { ReactElement } from "react"
import styled from '@emotion/styled'

type BenefitCardProps = {
    image: string,
    title: string,
    text: string
}

const defaultProps = {
    title: "Lorem Ipsum",
    /* 180 characters */
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit. Lobortis sceler."
}

const BenefitCardContainer = styled.div`
    width: 250px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;

    h2 {
        height: 40px;
        text-transform: uppercase;
    }
    & > p, h2 {
        color: var(--color-almostWhite);
        margin-left: 1rem;
    }

    & > img {
        width: 220px;
        height: 220px;       
    }

    & > p {
        font-size: var(--font-size-p);
        font-family: var(--font--family-secondary);
        line-height: 130%;
        height: 100%;
    }
`

const BenefitCard = ({ image, title, text }: BenefitCardProps): ReactElement => (
    <BenefitCardContainer>
        <img src={image}></img>        
        <h2>{title}</h2>
        <p>{text}</p>
    </BenefitCardContainer>
)

BenefitCard.defaultProps = defaultProps
export default BenefitCard