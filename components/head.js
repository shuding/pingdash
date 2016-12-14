import React from 'react'
import Head from 'next/head'

export default ({children}) => (
  <div>
    <Head>
      <meta charset='UTF-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
      <meta name='viewport' content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no'/>
      <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
    </Head>
    {children}
  </div>
)
