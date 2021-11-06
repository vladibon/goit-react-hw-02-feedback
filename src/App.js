import { Component } from 'react';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Notification } from './components/Notification';
import { Statistics } from './components/Statistics';
import { Percentages } from './components/Percentages';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, val) => total + val, 0);

  countFeedbackPercentages = total =>
    this.options.map(type => ({
      type,
      percentage: Math.round((this.state[type] / total) * 100) || 0,
    }));

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentages = this.countFeedbackPercentages(totalFeedback);

    return (
      <Container>
        <Section title='Please leave your feedback'>
          <FeedbackOptions
            options={this.options}
            handleFeedback={this.handleFeedback}
          />
        </Section>

        {totalFeedback ? (
          <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
            >
              <Percentages percentages={percentages} />
            </Statistics>
          </Section>
        ) : (
          <Notification message='No feedback given' />
        )}
      </Container>
    );
  }
}

export default App;
