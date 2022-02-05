import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>Home Page</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <p>
          This yellow brown quick fox jumped over something but I can not
          remember what it was so I am just typing things for testing.
        </p>
      </div>
    </Layout>
  )
}
