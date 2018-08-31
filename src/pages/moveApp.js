import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import { Page, Row, Column } from 'hedron'

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const CenterBlock = styled.div`
  margin-left:auto;
  margin-right:auto;
  margin-top:5vh;
`

const Frame = styled.iframe`
  position: relative;
  width: 330px;
  height: 675px;
  border:6px solid lightgrey;
  margin-left:25%;
  `

const Wrapper = styled.div`
  margin-bottom:5vh; 
`

const MoveSafe = () => ({
  render() {
    return (
      <div>
        <ContentWrapper>
          <CenterBlock>
          <Frame
              src="https://move-safe.herokuapp.com" >
              <p>
                <a href="https://move-safe.herokuapp.com">
                  Un lien à utiliser dans les cas où les navigateurs ne supportent
			            pas les <i>iframes</i>.
			          </a>
              </p>
            </Frame> 
            </CenterBlock>
        </ContentWrapper>
  
        <Wrapper />

        <Footer />
      </div>
    )
  },
})

export default MoveSafe
