import React from 'react'
import Layout from '../components/layout'
import Form from 'react-jsonschema-form'
import { schema, uiSchema } from '../schema/login.js'

const IndexPage = () => (
  <Layout>
    <div className="center w-90 w-50-ns bg-very-very-light shadow-light pa3">
      <Form schema={schema} uiSchema={uiSchema} />
    </div>
  </Layout>
)

export default IndexPage
