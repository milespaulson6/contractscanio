import React from "react";
import PropTypes from 'prop-types';

//probs need to do some onclick magic instead of href
const Button = ({color, text}) => {
    return (
        <button
            style={{ backgroundColor: color}}
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button;