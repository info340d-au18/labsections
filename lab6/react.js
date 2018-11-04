import React, { Component } from 'react';

const apiEndpoint = `https://jsonplaceholder.typicode.com/posts`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postMax: 3
    }
  }

  changeMax = (e) => {
    let value = Number(e.target.value);
    this.setState({ postMax: value });
  }

  componentDidMount = () => {
    fetch(apiEndpoint)
      .then(d => d.json())
      .then(d => {
        this.setState({ posts: d });
      })
      .catch(e => console.log(e));
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <input onChange={this.changeMax} />
        {this.state.posts.length > 0 &&
          this.state.posts.map((data, i) => {
            if (i < this.state.postMax) {
              return <div key={'post' + i}>
                <div style={{
                  border: '1px solid black',
                  margin: 10,
                  padding: 10,
                  borderRadius: 10
                }}>
                  <div style={{ color: 'red' }}>
                    UserId: {data.userId}
                    <span style={{ marginLeft: 50 }}>post id: {data.id}</span>
                  </div>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}>
                    {data.title}
                  </div>
                  <div>
                    {data.body}
                  </div>
                </div>
              </div>
            } else {
              return null;
            }
          })
        }
      </div>
    );
  }
}

export default App;