import React from "react";
import { useFriendStatus } from "./useFriendStatus";

export function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "gray" }}>{props.friend.name}</li>
  );
}
