import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";

import { fetchEmojiAction } from "../actions/emoji";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchEmoji();
  }
  render() {
    return (
      <F>
        <p>react is running</p>
      </F>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEmoji: () => {
      dispatch(fetchEmojiAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
