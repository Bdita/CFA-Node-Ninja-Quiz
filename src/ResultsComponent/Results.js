import React, { Component } from 'react';
import './Results.css';
import { Button, Row, Col, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Results extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{this.props.end_message}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Score: {this.props.score}
          </Modal.Body>

          <Modal.Footer>
            <Button className="retryButton" bsStyle= "success" onClick ={this.props.handleReset}>Retry</Button>
          </Modal.Footer>
        </Modal.Dialog>
    </div>
    );
  }
}

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  handleReset: PropTypes.func.isRequired
}

Results.defaultProps = {
  end_message: 'Congratulations'
}

export default Results;
