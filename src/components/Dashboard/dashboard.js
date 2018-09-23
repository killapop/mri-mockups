/* eslint no-unused-expresions: 0 */
import React from 'react'
import _ from 'lodash'
import TestValues from '../testValues.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roles: ['Facilitator', 'Organisation', 'Beneficiary'],
      activeRole: this.getRole(),
    }
    this.roleChangeHandler = this.roleChangeHandler.bind(this)
  }

  getRole() {
    const rolePathname = window.location.pathname.split('/').reverse()[0]
    console.log(rolePathname)
    return rolePathname && rolePathname !== 'dashboard'
      ? rolePathname
      : 'Facilitator'
  }

  roleChangeHandler(e) {
    e.persist()
    this.setState(state => ({ activeRole: e.target.id }))
  }

  isChecked(e) {
    return e.target.id === this.state.activeRole ? true : false
  }

  render() {
    return (
      <>
        <TestValues>
          {_.map(this.state.roles, (role, idx) => (
            <div className="form-control b0" key={idx}>
              <input
                id={role.toLowerCase()}
                onChange={this.roleChangeHandler}
                type="checkbox"
                checked={
                  this.state.activeRole.toLowerCase() === role.toLowerCase()
                }
              />
              <label className="ml1" htmlFor={role}>
                {role}
              </label>
            </div>
          ))}
        </TestValues>
        <div className="w-80-ns center pa4">
          <div className="title">Dashboard - {this.state.activeRole}</div>
        </div>
      </>
    )
  }
}

export default Dashboard
