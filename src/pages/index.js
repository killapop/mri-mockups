import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const indexSchema = [
  {
    title: 'All Users',
    description: 'Authentication: Applies to all users of the system.',
    links: [
      {
        title: 'Login screen',
        path: '/user/',
      },
      {
        title: 'Forgot password',
        path: '/user/forgot',
      },
      {
        title: 'Change password',
        path: '/user/change',
      },
    ],
  },
  {
    title: 'Facilitator',
    description:
      'The facilitators section. Facilitations create and manage Users (Organisations and Beneficiaries), Project Proposals, Personal Statements and Bundles ',
    links: [
      {
        title: 'Dashboard',
        description:
          'Lists Users, Project proposals, Personal Statements and Bundles',
        path: '/dashboard',
      },
      {
        title: 'Create form',
        description:
          'Form for creating Users, Project Proposals, Personal Statements and Bundles',
        path: 'application/form',
      },
    ],
  },
  {
    title: 'Organisations (Hosts and Partner Networks)',
    description:
      'Manage the account, lists all project proposals, change password',
    links: [
      {
        title: 'Account',
        description:
          'Lists Project Proposals and Bundles belonging to the Organisation',
        path: '/dashboard/organisation',
      },
      {
        title: 'Edit form',
        description: 'Edit Project proposal',
        path: 'application/form',
      },
    ],
  },
  {
    title: 'Beneficiaries (Artists and Activists at risk)',
    description: '',
    links: [],
  },
]

const IndexPage = () => (
  <Layout>
    <div className="center w-90 w-50-ns bg-very-very-light shadow-2 shadow-light">
      <div>
        {indexSchema.map((group, idx) => (
          <ol key={idx} className="section pa3 ma0">
            <li className="ml5">
              <div className="f3 b">{group.title}</div>
              <p className="mt0">{group.description}</p>
              <ol>
                {group.links.map((link, i) => (
                  <li key={i} className="mb1">
                    <Link to={link.path}>{link.title}</Link>
                    <p className="ma0">{link.description}</p>
                  </li>
                ))}
              </ol>
            </li>
          </ol>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
