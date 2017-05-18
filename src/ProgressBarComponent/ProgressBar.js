import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Progress from 'react-progressbar';

class ProgressBar extends Component {
  render() {
    return (
      <div>
        <Progress completed={((this.props.current_step-1) * 100)/this.props.question_length} />
      </div>
    )
    //
  }
}

{/*
const ProgressBar = (props) => {
  return <p>{props.current_step}/{props.question_length}</p>
} */}

{/* stateless- component that doesn't have any state or logic refactoring */}
{/*const ProgressBar = ({current_step, question_length}) => {

  return <p>{current_step}/{question_length}</p>
} */}


ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired,
}

export default ProgressBar;
