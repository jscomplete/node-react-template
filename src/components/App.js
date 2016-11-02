import React from 'react';
import * as api from '../api';

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };

  state = this.props.initialData;

  render() {
    return (
      <div className="App">
        <ul>
          {Object.entries(this.state.items).map(([itemId, item]) =>
            <li key={itemId}>{item.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
