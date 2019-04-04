import React, { Component } from "react";
import Example from "./BasicExample";
import { ChatRecipientPicker } from "./ChatRecipientPicker";
import { FriendListItem } from "./FriendListItem";
import { FriendStatus, FriendStatusHook } from "./FriendStatus";

export const users = [
  { id: 0, name: "Alice", isOnline: Math.random() > 0.5 },
  { id: 1, name: "Joe", isOnline: Math.random() > 0.5 },
  { id: 2, name: "Amy", isOnline: Math.random() > 0.5 },
  { id: 3, name: "Elaine", isOnline: Math.random() > 0.5 },
  { id: 4, name: "Bob", isOnline: Math.random() > 0.5 },
];

class App extends Component {
  state = {
    id: 0
  };

  onClick = () => {
    this.setState(
      state => {
        let nextId = state.id + 1;
        if (nextId > 4) {
          nextId = 0;
        }
        return { id: nextId };
      },
      () => {
        console.log(this.state.id);
      }
    );
  };

  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <Example />
        <div>
          <FriendStatus friend={users[id]} />
          <br />
          <FriendStatusHook friend={users[id]} />
        </div>
        <div>
          <button onClick={this.onClick}>Next user</button>
        </div>
        <ul>
          {users.map(u => (
            <FriendListItem key={u.id} friend={u} />
          ))}
        </ul>
        <ChatRecipientPicker />
      </div>
    );
  }
}

export default App;
