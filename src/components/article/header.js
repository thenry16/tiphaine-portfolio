import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../../components/colorbar'

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
    margin: 24px 0 0 24px;
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

const ArticleHeader = ({ props }) => ({
  render() {
    return (
      <div>
        <ArticleHeaderSection>
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
        </ArticleHeaderSection>
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
            <h1>
              {this.props.title}
            </h1>
          </Title>
          <ColorBar color="#A6FFD7" />
        </Row>
      </div>
    )
  },
})

export default ArticleHeader
