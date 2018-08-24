import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'
import ScrollableAnchor from 'react-scrollable-anchor'
import Section from '../../components/section'
import ColorBar from '../../components/colorbar'

const StyledSection1 = styled.div`
  padding-top: 30px;
  height:130px;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  background: #F9F9F9;
`


const Container1 = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`

const ArticleHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px;
`

const LogoLink = styled(Link)`
  text-decoration: none!important;
  color: #333;
  :visited, link, active {
    color: #333;
    text-decoration: none!important;
  };
  :hover {
    text-decoration: none!important;
    color: red!important;
  };
`

const Logo = styled.div`
  font-family: 'bebasneue', Helvetica, sans-serif;
  font-size: 36px;
  line-height: 32px;
`
const SocialIconWrapper = styled.div`display: flex;`

const SocialIcon = styled.svg`
  margin-left: 8px;
  fill: #333;
  :hover {
    fill: red;
  }
`

const SocialLink = styled.a``

const BackArrow = styled.svg`
  display: none;
  @media (min-width: 500px) {
    margin: 14px 0 0 24px;
    position: absolute;
    fill: #333;
    :hover {
      fill: red;
    }
    display: block;
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
`
const ColorDiv = styled.div`
  background: #cdcdcd;
  background-size: cover;
  width: 100%;
  height: 10px;
  margin-bottom:6.5vh;
`
const TitleProj =styled.h1`
  font-size:3rem;
`

const ArticleHeader = ({ props }) => ({
  render() {
    return (
      <div>
        {/* <ArticleHeaderSection>
          <LogoLink to="/">
            <Logo>Tiphaine Henry</Logo>
          </LogoLink>
          
          <SocialIconWrapper>
            <SocialLink href="mailto:tiphaine.henry@aol.com">
              <SocialIcon
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.566 7.37L12 12.594 5.433 7.37h13.133zm.01 9.22H5.425V8.748L12 13.978l6.575-5.23v7.842z"
                  fillRule="nonzero"
                />
              </SocialIcon>
            </SocialLink>
          </SocialIconWrapper>
        </ArticleHeaderSection> */}
        <ScrollableAnchor id={'home'}>
        <StyledSection1>
        <Container1>
        <Link to="/">
          <BackArrow
            width="28"
            height="42"
            viewBox="0 0 28 42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.84 17.69L21.295.232l6.01 6.01-14.45 14.452 14.45 14.45-6.01 6.012L.834 20.695 3.84 17.69z"
              fillRule="nonzero"
            />
          </BackArrow>
        </Link>
        
        <Row justifyContent="center">
          <Title>
            <TitleProj>
              {this.props.title}
            </TitleProj>
          </Title>
          <ColorBar color="#A6FFD7" />
        </Row>
        </Container1>
      </StyledSection1>
        </ScrollableAnchor>
      </div>
    )
  },
})

export default ArticleHeader
