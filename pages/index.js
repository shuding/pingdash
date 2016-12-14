import React from 'react'

import Head from '../components/head'
import Container from '../components/container'
import Title from '../components/title'
import Term from '../components/term'

export default () => (
  <Head>
    <Container>
      <Title/>
      <Term code={`npm i pingdash -g\n # good to go`}/>
    </Container>
  </Head>
)
