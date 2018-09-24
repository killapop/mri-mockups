/* eslint no-unused-expresions: 0 */
import React from 'react'
import _ from 'lodash'
import TestValues from '../testValues.js'
import Badge from './badge.js'
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roles: ['Facilitator', 'Organisation', 'Beneficiary'],
      activeRole: this.getRole(),
      activeBadge: this.getRole() === 'Bundles',
      badges: [
        {
          title: 'Users',
          types: [
            {
              title: 'Organisations',
              value: 33,
            },
            {
              title: 'Beneficiaries',
              value: 104,
            },
            {
              title: 'Facilitators',
              value: 5,
            },
          ],
        },
        {
          title: 'Project proposals',
          value: 39,
        },
        { title: 'Personal statements', value: 188 },
        { title: 'Bundles', value: 77 },
      ],
    }
    this.roleChangeHandler = this.roleChangeHandler.bind(this)
    this.badges = this.badges.bind(this)
  }

  getRole() {
    const rolePathname = window.location.pathname.split('/').reverse()[0]
    return rolePathname && rolePathname !== 'dashboard'
      ? rolePathname
      : 'facilitator'
  }

  roleChangeHandler(e) {
    e.persist()
    this.setState(state => ({ activeRole: e.target.id }))
  }

  isChecked(e) {
    return e.target.id === this.state.activeRole ? true : false
  }

  badges() {
    return this.state.activeRole === 'facilitator' ? (
      <div className="badges flex flex-wrap">
        {_.map(this.state.badges, (badge, idx) => (
          <Badge badge={badge} key={idx} />
        ))}
      </div>
    ) : (
      ''
    )
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
              <label className="ml1 gray dim" htmlFor={role.toLowerCase()}>
                {role}
              </label>
            </div>
          ))}
        </TestValues>
        <div className="w-80-ns center pa4">
          <div className="title">Dashboard - {this.state.activeRole}</div>
          {this.badges()}
        </div>
      </>
    )
  }
}

export default Dashboard
