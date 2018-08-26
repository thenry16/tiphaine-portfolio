import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

const Container = styled.div`
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  width:1500px;
`

const ContentWrapperIbiscus = props => ({
  render() {
    return (
      <Container>
          {props.children}
      </Container>
    )
  },
})

export default ContentWrapperIbiscus
