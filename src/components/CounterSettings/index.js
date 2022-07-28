import React, { Component } from "react";
import Counter from "../Counter";

class CounterSettings extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1, isstepValid: true };
  }
  handlerStep = ({ target: { value, name } }) => {
    if (
      !value.search(/^(?:[1-9][0-9]{0,6}(?:\.\d{1,2})?|100000|100000.00)$/) &&
      value < 1000001
    ) {
      this.setState({
        [name]: Number(value),
      });
    }
  };

  render() {
    const { step } = this.state;
    return (
      <section>
        <Counter step={step} />
        <input name="step" value={step} onChange={this.handlerStep} />
      </section>
    );
  }
}

export default CounterSettings;
