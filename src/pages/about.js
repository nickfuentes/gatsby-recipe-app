import React from "react"

import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem, ipsum dolor sit amet consectetur adispscing elit. Labroism
          beathe natus aperiam, voluptas discntinctuio ut odio.
        </p>
      </div>
    </Layout>
  )
}

export default about
