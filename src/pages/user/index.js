import React from 'react'
import Form from 'react-jsonschema-form'
import * as Schemas from '../../schema/user'
import Layout from '../../components/layout'

class UserIndex extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const page = window.location.pathname.split('/').reverse()[0]
    console.log(page ? page : 'login')
    const formSchema = Schemas[page ? page : 'login']
    return (
      <>
        <Layout>
          <div className="center w-90 w-50-ns bg-very-very-light shadow-light pa4">
            <Form schema={formSchema.schema} uiSchema={formSchema.uiSchema} />
          </div>
        </Layout>
      </>
    )
  }
}

export default UserIndex
