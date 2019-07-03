import React from 'react';
import './App.css';
import * as action_creators from './state/action-creators';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>{this.props.counter_1}</p>
          <p>{this.props.counter_3}</p>
          <p>{this.props.counter_4}</p>
          <a onClick={() => this.props.incrementCounter1()}>
            Click to increment counter 1
          </a>
          <a onClick={() => this.props.decrementCounter1()}>
            Click to decrement counter 1
          </a>
          <a onClick={() => this.props.incrementCounter1By(10)}>
            Click to increment counter 1 by 10
          </a>
          <a onClick={() => this.props.decrementCounter1By(10)}>
            Click to decrement counter 1 by 10
          </a>
          <a onClick={() => this.props.incrementCounter3()}>
            Click to increment counter 3
          </a>
          <a onClick={() => this.props.decrementCounter3()}>
            Click to decrement counter 3
          </a>
          <a onClick={() => this.props.incrementCounter4()}>
            Click to increment counter 4
          </a>
          <a onClick={() => this.props.decrementCounter4()}>
            Click to decrement counter 4
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter_1: state.counter_1,
    counter_3: state.counter_2.counter_3,
    counter_4: state.counter_2.counter_4
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter1: () => dispatch(action_creators.incrementCounter1()),
    decrementCounter1: () => dispatch(action_creators.decrementCounter1()),
    incrementCounter1By: number =>
      dispatch(action_creators.incrementCounter1By(number)),
    decrementCounter1By: number =>
      dispatch(action_creators.decrementCounter1By(number)),
    incrementCounter3: () => dispatch(action_creators.incrementCounter3()),
    decrementCounter3: () => dispatch(action_creators.decrementCounter3()),
    incrementCounter4: () => dispatch(action_creators.incrementCounter4()),
    decrementCounter4: () => dispatch(action_creators.decrementCounter4())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
