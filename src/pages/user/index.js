import React from 'react'
import { Link } from 'gatsby'
import Form from 'react-jsonschema-form'
import Layout from '../../components/layout'
import { login } from '../../schema/user.js'

const IndexPage = () => (
  <Layout>
    <div className="center w-90 w-50-ns bg-very-very-light shadow-light pa3">
      <Form schema={login.schema} uiSchema={login.uiSchema}>
        <div className="actions flex justify-end items-baseline">
          <button
            type="submit"
            className="bn bg-gray near-white f6 ttu ph3 pv2 br1 "
          >
            Login
          </button>
          <Link to="#" className="ml3 link primary-color">
            login trouble?
          </Link>
        </div>
      </Form>
    </div>
  </Layout>
)

export default IndexPage
