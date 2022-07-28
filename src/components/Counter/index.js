import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isDecrement: false, frequencyAutoClick: 1000 };
  }
  handlerSwitch = () => {
    const { isDecrement } = this.state;
    this.setState({ isDecrement: !isDecrement });
  };
  handlerAddDec = () => {
    const { step } = this.props;
    const { count, isDecrement } = this.state;
    const newCount = JSON.parse(JSON.stringify(count));
    this.setState(() => {
      if (!isDecrement) {
        return { count: newCount + step };
      }
      return { count: newCount - step };
    });
  };

  handlerFrequencyAutoClick = ({ target: { value, name } }) => {
    this.setState({
      [name]: Number(value),
    });
  };

  handlerAutoClick = () => {
    const { frequencyAutoClick } = this.state;
    var i = 1;
    var intervalId = setInterval(() => {
      i++;
      this.handlerAddDec();
      if (i > 30) {
        clearInterval(intervalId);
      }
    }, frequencyAutoClick);
  };

  render() {
    const { step } = this.props;
    const { count, frequencyAutoClick } = this.state;
    return (
      <article>
        <div>{count}</div>
        <button onClick={this.handlerSwitch}>Change Mode</button>
        <button onClick={this.handlerAddDec}>Add</button>
        <button onClick={this.handlerAutoClick}>Autoclick</button>
        <input
          name="frequencyAutoClick"
          value={frequencyAutoClick}
          onChange={this.handlerFrequencyAutoClick}
        />
        <div>{step}</div>
      </article>
    );
  }
}

export default Counter;
