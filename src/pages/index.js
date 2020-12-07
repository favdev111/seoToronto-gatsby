import React from 'react'
import {
  Intro,
  Skills,
  Work,
  Services,
  Popular,
  RecentTalks,
  Testimonials,
} from 'components/landing'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO title="seo-toronto" type="Organization" />
    <Intro />
    <Skills />
    <Work />
    <Services />
    <Popular />
    <Testimonials />
    <RecentTalks />
  </Layout>
)
