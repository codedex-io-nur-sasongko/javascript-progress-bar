import PropTypes from 'prop-types';
import "./progressbar.css";

const ProgressBar = (props) => {
  return (
    <div>
      <h1>Progress Bar</h1>
      <div className='progress-bar'>
        <div
          className='progress-bar-fill'
          style={{
            width: `${props.progress}%`,
          }}
        ></div>
      </div>
      <p
        style={{
          textAlign: 'center',
          color: props.progress === 100 ? 'green' : props.progress > 50 ? 'black' : 'red',
        }}
      >
        {props.progress}% Complete
      </p>
    </div>
  )
}

// Validate the props
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar