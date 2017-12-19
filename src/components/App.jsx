import React from 'react';

class App extends React.Component {
  state = {
    name: 'wg'
  };

  toggleName = () => {
    this.setState({
      name: this.state.name == 'wg' ? 'DG' : 'wg'
    });
  };

  render = () => {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.toggleName}>toggle</button>
      </div>
    );
  };
}

export default App;
