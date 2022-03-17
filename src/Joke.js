import React from "react";
import "./Joke.css";

// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

//   return (
//     <div className="Joke">
//       <div className="Joke-votearea">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

// export default Joke;


class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vote : 0};
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.text = props.text
  }

  upVote() {
    this.setState({ vote: this.state.vote + 1})
  }

  downVote() {
    this.setState({vote: this.state.vote -1})
  }


  render() {
    return (
    <div className = 'Joke'>
      <div className = 'Joke-votearea'>
        <button onClick={this.upVote}>
          <i className = 'fas fa-thumbs-up' />
        </button>
        <button onClick={this.downVote}>
          <i className='fas fa-thumbs-down' />
        </button>

        {this.state.vote}
      </div>
      <div className='Joke-text'>{this.text}</div>
    </div>
    )}

}


export default Joke;