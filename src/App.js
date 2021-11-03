import { Component } from 'react';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Notification } from './components/Notification';
import { Statistics } from './components/Statistics';
import { PercentageScale } from './components/PercentageScale';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, val) => total + val, 0);

  countFeedbackPercentage = type =>
    Math.round((this.state[type] / this.countTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <Container>
        <Section title='Please leave your feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        {totalFeedback ? (
          <Section title='Statistics'>
            <Statistics good={good} neutral={neutral} bad={bad} />

            <PercentageScale
              total={totalFeedback}
              options={options}
              countFeedbackPercentage={this.countFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message='No feedback given'></Notification>
        )}
      </Container>
    );
  }
}

export default App;
