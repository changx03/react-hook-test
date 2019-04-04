import React, { useState, useEffect } from "react";
import { ChatAPI } from "./ChatAPI";

export class FriendStatus extends React.Component {
  state = { isOnline: null };

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friend !== this.props.friend) {
      ChatAPI.unsubscribeFromFriendStatus(
        prevProps.friend.id,
        this.handleStatusChange
      );
      ChatAPI.subscribeToFriendStatus(
        this.props.friend.id,
        this.handleStatusChange
      );
    }
  }

  handleStatusChange = status => {
    this.setState({
      isOnline: status.isOnline
    });
  };

  render() {
    if (this.state.isOnline == null) {
      return <span>Loading...</span>;
    }
    const status = this.state.isOnline ? "Online" : "Offline";
    return <span>{status}</span>;
  }
}

// the React hook version
export function FriendStatusHook(props) {
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // specify how to clean up after this effect
    return () => {
      // cleanup func doesn't have to return a named function
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // list of dependencies. Only re-subscribe if props.friend.id changes

  if (isOnline == null) {
    return <span>Loading...</span>;
  }
  const status = isOnline ? "Online" : "Offline";
  return <span>{status}</span>;
}
