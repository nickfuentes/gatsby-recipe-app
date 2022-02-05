import React from "react"

import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adispscing elit. Labroism
          beathe natus aperiam, voluptas discntinctuio ut odio.
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
