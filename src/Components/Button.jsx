import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    const { text, func } = props;

    return (
        <button onClick={func} className="glow-button px-8 mx-auto py-4 rounded-md border-2 border-blue-400 duration-200">
            <p>{text}</p>
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    func: PropTypes.func
};

