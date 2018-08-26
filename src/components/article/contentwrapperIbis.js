import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  width:1500px;
`

const ContentWrapperIbis = props => ({
  render() {
    return (
      <Container>
          {props.children}
      </Container>
    )
  },
})

export default ContentWrapperIbis
