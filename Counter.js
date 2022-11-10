import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1><button onClick={this.decrement} className="counter"></button>
        <button onClick={this.increment} className="counter"></button>
        {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
