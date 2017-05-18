import React, { Component } from 'react';
import './MultiChoice.css';
import { Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MultiChoice extends Component {
  render() {
    return(
      <div className="well">
        {this.props.answers.map((answer, i) => <Button className = "answersButton" block key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</Button>)}
        {/* <p> You selected: {this.props.selectedAnswer}</p> */}
        <Row>
          <Col xs={4} xsPush={4} sm={4} smPush={6} md={4} mdPush={6} className = "submitButton">
            <Button className="submitButton" bsSize="small" bsStyle="success" onClick={this.props.handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </div>

    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default MultiChoice;
