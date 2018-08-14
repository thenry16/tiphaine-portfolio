import React from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'

import CoverImage from '../components/article/coverimage'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import TwoImage from '../components/article/twoimage'
import LargeImage from '../components/article/largeimage'
import FullSizeImage from '../components/article/fullsizeimage'

import LifeTimeCoverImage from '../img/articles/lifetime/lifetimeCover.jpg'
import SilosImage from '../img/articles/lifetime/silos.jpg'
import LifeTimeUIImage from '../img/articles/lifetime/lifetimeUI.jpg'
import LifeTimeMobileImage from '../img/articles/lifetime/lifetimePhoneDocuments.jpg'
import Screenshot1 from '../img/articles/lifetime/screenshot1.jpg'
import Screenshot2 from '../img/articles/lifetime/screenshot2.jpg'
import LifeTimeDesktopImage from '../img/articles/lifetime/lifetimeDesktop.jpg'
import LifeTimeHubImage from '../img/articles/lifetime/lifetimeHub.jpg'
import LifeTimeHubImage2 from '../img/articles/lifetime/lifetimeHub2.jpg'

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

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Frame = styled.iframe`
  position: relative;
  padding-top: 5vh;
  width: 330px;
  height: 675px;
  border:6px solid lightgrey;
`
const MoveSafe = () => ({
  render() {
    return (
      <div>
        <Header title="MoveSafe" />
        <CoverImage src={LifeTimeCoverImage} focusX={'73.5%'} focusY={'50%'} />
        <ContentWrapper>
          <h2 id="toc_0">Guiding you through every walk!</h2>

          <p>
            People often want to avoid dangerous neighborhoods while walking,
            but don’t know the dangerous areas around them.
            Our app provides safe paths, so that users can reach their destination worry-free!
            Unlike traditional maps, we incorporate safety information with available paths.
          </p>

        </ContentWrapper>
        <ContentWrapper>
          <h3>
            Test the app
          </h3>
            <Frame
              src="http://a10-movesafe.herokuapp.com" >
              <p>
                <a href="http://a10-movesafe.herokuapp.com">
                  Un lien à utiliser dans les cas où les navigateurs ne supportent
			            pas les <i>iframes</i>.
			          </a>
              </p>
            </Frame>
        </ContentWrapper>
        <ContentWrapper>
          <h3 id="toc_2">
            Creation Process, challenges & what I did
          </h3>
        </ContentWrapper>
      
        <ContentWrapper>
          <h3 id="toc_11">Outlook</h3>

          <p>
            We live in exciting times for digital health. Apps are maturing
            slowly and the acceptance of tools that really help doctors and
            patients in their daily communication and interaction is increasing
            from day to day. Digital health has long been synonymous with
            fitness and nutrition apps or quantified self tools. The real
            potential will only unfold when software not only helps young,
            healthy people to stay healthy, but actually supports (chronically)
            sick, elderly people and others really in need of care. When
            software really helps doctors in their daily work and creates
            transparency for all sides.
          </p>
        </ContentWrapper>
        <Footer />
      </div>
    )
  },
})

export default MoveSafe
