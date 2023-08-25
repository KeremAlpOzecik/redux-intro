import React, { Component } from "react";
import { connect } from "react-redux";
import { decreaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";

class DecreaseCouter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          Azalt
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch) };
  }
  
  export default connect(mapDispatchToProps)(DecreaseCouter);
