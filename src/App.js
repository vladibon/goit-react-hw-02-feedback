import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className='feedbacks'>
        <h2>Please leave feedback</h2>

        <div className='buttons'>
          <button
            className='good'
            type='button'
            onClick={this.handleGoodFeedback}
          >
            Good
          </button>
          <button
            className='neutral'
            type='button'
            onClick={this.handleNeutralFeedback}
          >
            Neutral
          </button>
          <button
            className='bad'
            type='button'
            onClick={this.handleBadFeedback}
          >
            Bad
          </button>
        </div>

        <h2>Statistics</h2>

        <div>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default App;
