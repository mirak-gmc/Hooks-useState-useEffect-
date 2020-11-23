import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
    isShow: true,
    intervall: null,
  };

  componentDidMount() {
    console.log("The compenent is Rendring ......");
    this.setState({
      intervall: setInterval(
        () => this.setState({ count: this.state.count + 1 }),
        1000
      ),
    });
  }

  componentDidUpdate(pp, ps) {
    console.log("The compenent is Updating ......");
  }
  componentWillUnmount() {
    alert("i am gone ! :'( ");
    clearInterval(this.state.intervall);
  }

  handleIncrement = () => this.setState({ count: this.state.count + 1 });

  toggleShow = () => this.setState({ isShow: !this.state.isShow });

  render() {
    return (
      <div>
        <button onClick={() => this.toggleShow()}>Show</button>
        {this.state.isShow && (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={() => this.handleIncrement()}>Increment</button>
          </div>
        )}
      </div>
    );
  }
}

export default ClassCounter;
