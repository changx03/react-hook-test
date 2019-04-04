import React, { useState } from 'react';
import { users } from './App';
import Circle from './Circle';
import { useFriendStatus } from './useFriendStatus';

export function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(0);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
    <Circle color={isRecipientOnline ? 'green' : 'red'} />
    <select
      value={recipientID}
      onChange={e => setRecipientID(Number(e.target.value))}
    >
      {users.map(friend => (
        <option key={friend.id} value={friend.id}>
          {friend.name}
        </option>
      ))}
    </select>
  </>
  );
}
