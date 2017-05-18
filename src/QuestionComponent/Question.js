import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './Question.css';

class Question extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} s={12} md={12} lg={12} className = "questionTitle">{this.props.current_question}</Col>
      </Row>
    );
  }
}

Question.propTypes ={
  current_question: PropTypes.string.isRequired,
}
export default Question;
