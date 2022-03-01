import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Imagers from "../examples/Images"
import Images from "../examples/Images"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Home Page</h1>
        <Images />
      </div>
    </Layout>
  )
}
