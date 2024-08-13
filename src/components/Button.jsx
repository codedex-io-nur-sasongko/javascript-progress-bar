import PropTypes from 'prop-types';
import "./button.css";
const Button = (props) => {

  return (
    <button
      className='button'
      onClick={props.onClick}
      tabIndex={0}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button