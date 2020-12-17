    import React from "react"
import styled from '@emotion/styled'
import Repository from "../Molecules/Repository"
import development from "../../images/text/text_development.svg"
import InfoBanner from "../Molecules/InfoBanner"
import breakpoints from "../../styles/breakpoints"

type DevelopmentProps = {
    data: Object
}

const defaultProps = {
    data: []
}

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    padding: 7rem 10rem;
    background-size: cover; 
    background-repear: no-repeat;
`
const Repositories=styled.div`
    display: flex;
    flex-direction: column;
    & > h1 {
        color: var(--color-neonBlue);
    }
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    @media(max-width: ${breakpoints.mobile}) {
        &:nth-of-type(2) {
            margin-left: 5.5rem;
        }
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    margin-top: 3rem;
    justify-content: space-between;
    width: 700px;
    @media(max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        width: 390px;
    }
`

const AlphaNote = styled.div`
    text-transform: uppercase;
    color: #C5AFFF;
    width: 700px;
    margin: 3rem 0 2rem 0;
    @media(max-width: ${breakpoints.mobile}) {
        width: 390px;
        padding-left: 1rem;
    }
`
const ImageWrapper = styled.div`
    width: 700px;
    @media(max-width: ${breakpoints.mobile}) {
        width: 400px;
    }
`

const Development = ({ data }: DevelopmentProps) => (
    <Container id="development">
            <ImageWrapper>
                <img src={development}></img>
            </ImageWrapper>
            <Content>
                {data.map(section =>
                    <Repositories>
                        {section.map((repo, key) =>                         
                            <Repository 
                                key={key}
                                title={repo.title}  
                                description={repo.description}
                                link={repo.github ? repo.github : repo.link}
                                icon={!!repo.github}
                            />)}
                    </Repositories>
                )}                
            </Content>       
            <AlphaNote>The official alpha version has not been released yet. For more information on the project updates please follow our announcements in Discord and Twitter.</AlphaNote>    
            <InfoBanner></InfoBanner>
    </Container>
)

Development.defaultProps = defaultProps
export default Development