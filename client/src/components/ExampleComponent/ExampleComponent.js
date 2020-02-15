
import React from 'react';
import axios from 'axios';
import './example-component.scss';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    this.getResults();
  }

  getResults() {
    axios.get('/api/results')
      .then(res => {
        if (res.data) {
          this.setState({
            results: res.data,
          });
        }
      })
  }
  
  render() {
    const results = this.state.results.map((result) => {
      return <li key={result._id}>{result.nominee}</li>
    });
    return (
      <>
        <h1>Nominations</h1>
        <ul>
          {results}
        </ul>
      </>
    )
  }
}

export default ExampleComponent;