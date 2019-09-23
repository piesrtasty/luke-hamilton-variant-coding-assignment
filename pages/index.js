import React, { Fragment } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { keyframes, css, Global } from '@emotion/core'
import App from '../components/app'
import { RICE_CAKE } from '../shared/style/colors'

const Page = styled('div')({
  paddingTop: 40,
  height: '100%'
})

const Home = () => (
  <Page>
    <style></style>
    <Head>
      <title>Luke Hamilton Coding Challenge</title>
    </Head>
    <Global
      styles={{
        '#__next': {
          height: '100vh'
        }
      }}
    />
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          background-color: ${RICE_CAKE};
          height: 100%;
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 24px;
          ' > div': {
            display: 'none';
          }
        }
        #__next {
          height: 100%;
        }
      `}
    />
    <App />
  </Page>
)

export default Home
