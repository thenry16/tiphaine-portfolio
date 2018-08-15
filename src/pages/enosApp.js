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
`

const Frame = styled.iframe`
  position: relative;
  width: 90%;
  height: 78vh;
  border:6px solid lightgrey;  
  margin-left:5vw;
  margin-top:-2.8vw;
  `

const Wrapper = styled.div`
  margin-bottom:3.2vh; 
`

const MoveSafe = () => ({
  render() {
    return (
      <div>
        <ContentWrapper>

        </ContentWrapper>
        <CenterBlock>
          <Frame
              src="http://enos-app.herokuapp.com" >
              <p>
                <a href="http://enos-app.herokuapp.com">
                  Un lien à utiliser dans les cas où les navigateurs ne supportent
			            pas les <i>iframes</i>.
			          </a>
              </p>
            </Frame> 
            </CenterBlock>
        <Wrapper />

        <Footer />
      </div>
    )
  },
})

export default MoveSafe
