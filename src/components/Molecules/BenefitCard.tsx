import React, { ReactElement } from "react"
import styled from '@emotion/styled'

type BenefitCardProps = {
    image: string,
    title: string,
    text: string
}

const defaultProps = {
    image: "string",
    title: "Lorem Ipsum",
    /* 180 characters */
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit. Lobortis sceler."
}

const BenefitCardContainer = styled.div`
    width: 250px;
    padding: 1rem;

    & > p, h1 {
        color: var(--color-almostWhite);
        margin-left: 2rem;
    }

    & > p {
        font-size: var(--font-size-p);
        font-family: var(--font--family-secondary);
        line-height: var(--line-height-2);
    }
`

const BenefitCard = ({ image, title, text }: BenefitCardProps): ReactElement => (
    <BenefitCardContainer>
        <img style={{height: '250px', width: '250px'}} src={image}></img>        
        <h1>{title}</h1>
        <p>{text}</p>
    </BenefitCardContainer>
)

BenefitCard.defaultProps = defaultProps
export default BenefitCard