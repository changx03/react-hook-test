import React, { Component } from "react";
import Example from "./BasicExample";
import { FriendStatus, FriendStatusHook } from "./FriendStatus";

class App extends Component {
  state = {
    id: 101
  };
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <Example />
        <div>
          <FriendStatus friend={{ id: id }} />
          <br />
          <FriendStatusHook friend={{ id: id }} />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState(
                state => ({ id: state.id + 1 }),
                () => {
                  console.log(this.state.id);
                }
              );
            }}
          >
            Next user
          </button>
        </div>
      </div>
    );
  }
}

export default App;
