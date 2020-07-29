import React, { Component } from 'react'; // imrc is the shortcut...
import Joke from './Joke';
// import -something-, { -something- } from './-something-';
import './JokeList.css';
import axios from 'axios';
// import uuid from "uuid/v4"
import { v4 as uuidv4 } from 'uuid';

// npm install axios (for API requests) in terminal???

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = { jokes: JSON.parse(window.localStorage.getItem("jokes")) || [] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if(this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
      jokes.push({ text: res.data.joke, votes: 0, id: uuidv4(), });
    }
    // console.log("here we go...")
    // console.log(jokes);
    this.setState({ jokes: jokes });
    window.localStorage.setItem("jokes", JSON.stringify(jokes))
  }

  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j => 
          j.id === id ? {...j, votes: j.votes + delta} : j)
      })
    )
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title"><span className="">Dad</span> Jokes</h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="an emoji"/>
          <button className='JokeList-getmore' onClick={this.handleClick}>Get New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            // <div>{j.joke} - {j.votes}</div>
            <Joke key={j.id} text={j.text} votes={j.votes} upvote={() => this.handleVote(j.id, 1)} downvote={() => this.handleVote(j.id, -1)} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
