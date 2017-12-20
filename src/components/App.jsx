import React from 'react';
import styles from './style.scss';

class App extends React.Component {
  state = {
    name: 'wg'
  };

  toggleName = () => {
    this.setState({
      name: this.state.name === 'wg' ? 'DG' : 'wg'
    });
  };

  render = () => (
    <div>
      <h1>{this.state.name}</h1>
      <button onClick={this.toggleName}>toggle</button>
    </div>
  );
}

export default App;
