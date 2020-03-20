import React from "react";
import PropTypes from "prop-types";

function TestataGolf(props) {
  return <div>{props.club.denominazione}</div>;
}

TestataGolf.propTypes = {
  club: PropTypes.object.isRequired
};

export default TestataGolf;
