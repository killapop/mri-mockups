import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import './badge.css'

class Badge extends React.Component {
  render() {
    const hasValue = val => {
      return val ? <div className="badgeValue">{val}</div> : ''
    }
    const badgeTypes = () => {
      return this.props.badge.types ? (
        <div className="badgeItems">
          {_.map(this.props.badge.types, (type, idx) => (
            <div
              key={idx}
              className="badgeItem relative mt3 mb2 w-100 bg-light-silver ph2 pv1"
            >
              {type.title}
            </div>
          ))}
        </div>
      ) : (
        ''
      )
    }
    return (
      <>
        <div
          className={`badge pa3 flex flex-column w-20 justify-start items-center ba pointer relative b--white bg-black-10 mr4 {this.props.activeState}`}
          id={this.props.badge.title.replace(' ', '').toLowerCase()}
        >
          <div className="f4 gray t-shadow-light b">
            {this.props.badge.title}
          </div>

          {hasValue(this.props.badge.value)}
          {badgeTypes()}
        </div>
      </>
    )
  }
}

Badge.propTypes = {
  activeState: PropTypes.bool,
  badge: PropTypes.object.isRequired,
}

export default Badge
