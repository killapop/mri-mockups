/* eslint no-unused-vars: 0 */
import React from 'react'
import { Link } from 'gatsby'

const userLinks = [
  {
    label: 'Info',
    path: '/info',
    Icon: 'info-circle',
  },
  {
    label: 'Help',
    path: '/help',
    Icon: 'question-circle',
  },
  {
    label: 'Account',
    path: '/account',
    Icon: 'user-circle',
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
    Icon: 'tachometer-alt',
  },
]
const Header = ({ siteTitle }) => (
  <div className="bg-white w-100 shadow-light fixed top-0 pv2 ph3">
    <nav className="ttu flex justify-between">
      <div className="userNav flex justify-start">
        <a
          href="https://ifa.org"
          target="_blank"
          rel="noopener noreferrer"
          className="pt1 link silver dim"
        >
          <div className="flex flex-column f6 items-center mh2">
            <i className={`fa fa-home mb2 fa-15x`} />
            <span className="f7">MRI</span>
          </div>
        </a>
        {userLinks.map(({ label, Icon, path }, key) => (
          <Link key={key} to={path} className="pt1 link silver dim mh3">
            <div className="flex flex-column f6 items-center">
              <i className={`fa fa-${Icon} mb2 fa-15x`} />
              <span className="f7">{label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="actions pointer flex items-center">
        <i className="fa fa-ellipsis-v fa-15x silver" />
      </div>
    </nav>
  </div>
)
export default Header
