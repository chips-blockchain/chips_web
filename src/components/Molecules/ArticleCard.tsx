import React, { ReactElement } from "react"
import styled from '@emotion/styled'
import ThreeWayAnimation from "./ThreeWayAnimation"
import Button from "../Atoms/Button"
import breakpoints from "../../styles/breakpoints"
import ArticleCardInline from "./ArticleCardInline"

type ArticleCardProps = {
    title: string,
    text: string,
    orientation: boolean,
    theme: string,
    themeImage: string
}

const defaultProps = {
    title: "Lorem Ipsum",
    /* 180 characters */
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit. Lobortis sceler.",
    theme: 'pink',
    themeImage: 'machine'
}

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin: 2rem;
    width: 940px;

    padding: 2rem 1rem 3rem 2rem;

    background-color: var(--color-veryDarkPurple);
    border-radius: 5px;
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.25);

    p, h1 {
        color: var(--color-almostWhite);
    }

    h2 {
        text-transform: uppercase;
        font-weight: 400;
    }

    p {
        font-size: var(--font-size-p);
        font-family: var(--font--family-secondary);
        line-height: 130%;
        margin-bottom: 2rem;
        opacity: 0.9;
        @media(max-width: ${breakpoints.mobile}) {
            display: none;
        }
    }

    & > .articleCardSmall {
        display: none;
    }

    @media(max-width: ${breakpoints.tablet}) {
        width: 800px;
    }

    @media(max-width: ${breakpoints.tablet2}) {
        width: 600px;
        padding: 1rem 1rem 1rem 2rem;
        flex-direction: column;
    }

    @media(max-width: ${breakpoints.mobile}) {
        display: none;
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: ${p => p.orientation ? '2rem' : '1rem'};
    padding-left: ${p => !p.orientation ? '2rem' : '2rem'};
`

const Wrapper = styled.div`
    display: none;
    position: relative;
    width: 100%;
    @media(max-width: ${breakpoints.mobile}) {
        display: flex;
    }
`

const ArticleCard = ({ orientation, title, text, theme, themeImage }: ArticleCardProps): ReactElement => {
    // 52 rem - 16 * 82 = 830
    if (window.innerWidth < 830) {
        orientation = true;
    }

    return (         
        <div>
            <ArticleContainer >
                {orientation &&
                    <ThreeWayAnimation themeImage={themeImage}></ThreeWayAnimation>
                }
                <CardContent orientation={orientation}>
                    <h2>{title}</h2>
                    <svg width="90" height="5" viewBox="0 0 90 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="5" height="5" rx="2.5" fill="#FF9F4F"/>
                        <rect x="10" width="10" height="5" rx="2.5" fill="#FF9F4F"/>
                        <rect x="25" width="20" height="5" rx="2.5" fill="#FF9F4F"/>
                        <rect x="50" width="40" height="5" rx="2.5" fill="#FF4E63"/>
                    </svg>
                    <p>{text}</p>
                    <Button theme={theme}></Button>
                </CardContent>
                {!orientation &&
                    <ThreeWayAnimation themeImage={themeImage}></ThreeWayAnimation>
                }      
            </ArticleContainer>
            <Wrapper>
                <ArticleCardInline title={title} />          
            </Wrapper>
        </div>

    )}



ArticleCard.defaultProps = defaultProps
export default ArticleCard