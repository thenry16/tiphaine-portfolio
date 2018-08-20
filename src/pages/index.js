import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Page, Row, Column } from 'hedron'

import Hero from '../components/hero'
import Section from '../components/section'
import About from '../components/about'
import StartDiv from '../components/StartDiv'
import Projects from '../components/Projects'
import Contact from '../components/contact'
import EndDiv from '../components/EndDiv'
import Footer from '../components/footer'

import BebasNeueBoldWoff2 from '../fonts/bebasneuebold.woff2'
import BebasNeueBoldWoff from '../fonts/bebasneuebold.woff'
import CharterRegularWoff2 from '../fonts/charterregular.woff2'
import CharterRegularWoff from '../fonts/charterregular.woff'
import CharterBoldWoff2 from '../fonts/charterbold.woff2'
import CharterBoldWoff from '../fonts/charterbold.woff'
import Miscellaneous from '../components/Miscellaneous';


injectGlobal`
  @font-face {
    font-family: 'bebasneue';
    src: url(${BebasNeueBoldWoff2}) format('woff2'),
         url(${BebasNeueBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'charter';
    src: url(${CharterRegularWoff2}) format('woff2');
    src: url(${CharterRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'charter';
    src: url(${CharterBoldWoff2}) format('woff2');
    src: url(${CharterBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  a {
    color: #333;
    text-decoration: underline;
    :hover {
      color: red!important;
      text-decoration: underline
    }
    :visited {
      color: #333;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p+ h2 {
    margin-top: 1.2em;
  }

  p + h3 {
    margin-top: 1.5em;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Tiphaine Henry</title>
          <meta name="description" content="Tiphaine Henry's projects" />
          <meta name="keywords" content="design, ux, ui, product, graphic, health, climbing, app, interface, experience, festival, techno, code" />
          <meta property="og:description" content="Tiphaine Henry's projects" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tiphaine Henry" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Hero />
        <ScrollableAnchor id={'about'}>
          <Section>
            <About />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Section>
            <Projects />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'miscellaneous'}>
        <Section>
          <Miscellaneous />
        </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
        <Section>
          <Contact />
        </Section>
        </ScrollableAnchor>

        {/*        <Section>
          <Photo />
        </Section>
        {/*        ds<Section>
          <Photo />
        </Section>
        <Section>
          <Notes />
        </Section>*/}
        <Footer />
      </div>
    )
  }
}
