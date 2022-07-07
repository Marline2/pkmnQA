import React from "react";
import { Route, Switch } from "react-router-dom";

import Name from "./Name";
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";
import Spinner from "./Spinner";
import Answer from "./Answer";

import { withRouter } from "react-router";

import { connect } from "react-redux";
import { firestore } from "./firebase";

const mapStateTopProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/" exact component={Name} />
          <Route path="/score" component={Score} />
          <Route path="/message" component={Message} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/answer" component={Answer} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
