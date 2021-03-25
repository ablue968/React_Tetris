import React from "react";
import PropTypes from "prop-types";

const Display = ({ gameOver, text }) => <div>{text}</div>;

export default Display;

Display.propTypes = {
	gameOver: PropTypes.any,
	text: PropTypes.any
};