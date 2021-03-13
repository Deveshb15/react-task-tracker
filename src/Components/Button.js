import PropTypes from 'prop-types'

const Button = (props) => {
    return <button style={{ backgroundColor: props.color }} className="btn" onClick={props.btnClick}>{props.text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default Button
