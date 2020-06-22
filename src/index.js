import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const appStyles = {
  backgroundColor: "#342224",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const pStyles = {
  color: "white",
  fontSize: "1.5rem",
};

class App extends React.Component {
  render() {
    return (
      <div style={appStyles}>
        <QuoteBox />
        <p style={pStyles}>by BilalAfzal</p>
      </div>
    );
  }
}

const quoteBoxStyles = {
  backgroundColor: "#f7f7f7",
  fontSize: "2rem",
  width: "40vw",
  padding: "4rem 0",
  marginBottom: ".75rem",
  borderRadius: "2%",
};

const iconStyles = {
  color: "#342224",
  fontSize: "3rem",
  padding: "1rem",
  borderRadius: "5%",
};

const newQuote = {
  backgroundColor: "#342224",
  fontSize: "1.5rem",
  color: "#f7f7f7",
  padding: "1rem",
  borderRadius: "5%",
  fontFamily: "Raleway",
};

const buttonLineStyles = {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 2rem",
};

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        this.setState({
          quote: response.data.content,
          author: response.data.author,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    this.setState((state) => ({}));
  }
  handleNewQuoteClick() {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        this.setState({
          quote: response.data.content,
          author: response.data.author,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div style={quoteBoxStyles} id="quote-box">
        <Quote quote={this.state.quote} author={this.state.author} />
        <div style={buttonLineStyles}>
          <div>
            <a
              style={iconStyles}
              className="Twitter"
              id="tweet-quote"
              href="https://www.twitter.com/intent/tweet"
            >
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a style={iconStyles} className="LinkedIn" href="/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
          <a
            style={newQuote}
            className="NewQuote"
            onClick={this.handleNewQuoteClick}
            id="new-quote"
          >
            New Quote
          </a>
        </div>
      </div>
    );
  }
}

const quoteStyles = {
  margin: "1rem 4rem",
  fontSize: "2rem",
  fontFamily: "Raleway",
  fontWeight: "500",
};

const quoteIconStyles = {
  margin: "0 1rem",
};

const authorStyles = {
  textAlign: "right",
  fontSize: "1.5rem",
  marginTop: "1rem",
};

class Quote extends React.Component {
  render() {
    return (
      <div style={quoteStyles}>
        <i class="fa fa-quote-left" aria-hidden="true" style={quoteIconStyles} ></i>
        <p id="text">{this.props.quote}</p>
        <p id="author" style={authorStyles}>
          {" "}
          - {this.props.author}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
