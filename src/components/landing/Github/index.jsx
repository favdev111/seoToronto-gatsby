import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from 'components/common'

export const Github = () => {
  return (
    <Container>
      <Subtitle>Open Source</Subtitle>
      <Project icon={GithubIcon} type="Github" color="#000" github />
    </Container>
  )
}
