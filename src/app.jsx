import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        topspots: []
    }
  axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
      <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
        <div className='container mt-5'>
          <div className='card border border-dark'>
            <div className='card-body'>
              <h1>
                San Diego Top Spots
              </h1>
              <h5>
                A list of the top 30 places to see in San Diego, California
              </h5>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
