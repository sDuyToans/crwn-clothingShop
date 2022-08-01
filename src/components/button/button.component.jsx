/*
default button
inverted button
google sign in button
*/

import React from 'react';
import './button.styles.scss';
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({ children, buttonType, ...otherProps}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
  )
}
