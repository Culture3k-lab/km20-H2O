import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  const {name, link, type} = props

  const getButtonStyle = () => {
    switch (type) {
      case 'primary':
        return 'primaryButtonStyle'
      case 'secondary':
        return 'secondaryButtonStyle'
      case 'tertiary':
        return 'tertiaryButtonStyle'
      default:
        return 'defaultButtonStyle'
    }
  }

  return (
    <a href={link} className={`button ${getButtonStyle()}`} target="_blank">
      {name}
    </a>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}

Button.defaultProps = {
  type: 'primary'
}

export default Button;