import React from 'react'
import Form from 'react-jsonschema-form'
import * as Schemas from '../../schema/user'
import Layout from '../layout.js'

class Forgot extends React.Component {
  render() {
    return (
      <Layout>
        <div className="center w-90 w-50-ns bg-very-very-light shadow-light pa3">
          <Form
            schema={Schemas['forgot'].schema}
            uiSchema={Schemas['forgot'].uiSchema}
          />
        </div>
      </Layout>
    )
  }
}

export default Forgot
