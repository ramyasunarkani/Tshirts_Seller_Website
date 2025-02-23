import React from 'react';
import './Button.css';
function Button({ className = '', type = 'button', onClick, children }) {
    const classes = `button ${className}`.trim(); // Ensure no extra spaces

    return (
        <button className={classes} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
