import React, { Component } from 'react';
import TopSpot from './topspots';

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

  clickHandler(){
    
  }

  render() {
    return (
      <div className='App bg-primary'>
        <div className='container'>
          <div className='jumbotron border border-dark bg-white text-dark'>
            <h1 className='display-4'>San Diego Top Spots</h1>
            <hr />
            <h5>A list of the top 30 places to see in San Diego, California</h5>            
          </div>
        </div>
        <div className='container mt-3 text-dark'>
        { 
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;
