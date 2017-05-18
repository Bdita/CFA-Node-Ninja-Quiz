import React, { Component } from 'react';
import './App.css';
import Question from '../QuestionComponent/Question';
import ProgressBar from '../ProgressBarComponent/ProgressBar';
import MultiChoice from '../MultiChoiceComponent/MultiChoice';
import Results from '../ResultsComponent/Results';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';

class App extends Component {
  //initializing the app
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.resetProgress = this.resetProgress.bind(this);

    this.quiz_data = [
      {
        question: 'Which of the following command will show all the modules installed globally?',
        correct_answer: "$npm ls -g",
        possible_answers: ['$npm ls -g', '$npm ls', '$node ls -g', '$node ls']
      },

      {
        question: 'Which of the following module is required to create a web server?',
        correct_answer: "http module",
        possible_answers: ['url module', 'net module', 'http module', 'web module']
      }
    ]
  }

submitAnswer() {
  if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
    this.setState({
      score: this.state.score + 1,
      progress: this.state.progress + 1,
      selected: 'Not yet!'
    })
  } else {
    this.setState({
      progress: this.state.progress + 1,
      selected: 'Not yet!'
    })
  }
}

updateSelected(answer) {
  this.setState({
    selected: answer
  })
}

resetProgress() {
  this.setState({
    progress: 0,
    selected: 'None yet!',
    score: 0
  })
}

  render() {
    return (
      <div>
      <Row>
        <Col xs={12} sm={10} smPush={1} md={8} mdPush={2} lg={6} lgPush={3} className="ninjaImage">
          <Image src="http://res.cloudinary.com/dihqhbf9i/image/upload/v1495064879/Blackbird_rvfnin.png" responsive />
          <Image src="https://static1.squarespace.com/static/5828d63b9f7456b3bc31c681/585a11e3cd0f681882f9f197/585a121459cc68785de896b8/1482297876832/ninja17.gif?format=500w"responsive/>
        </Col>
      </Row>
        {this.state.progress < this.quiz_data.length ? (
          <div>
            <ProgressBar current_state={this.state} current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected}/>
          </div>
        )
        : (
          <Results score={this.state.score} handleReset = {this.resetProgress} end_message="Congratulations, you have finished!"/>
        )}
      </div>
    );
  }
}

export default App;
