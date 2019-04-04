import { useEffect, useState } from 'react';
import { ChatAPI } from './ChatAPI';

// use[state] is the naming convention
// components using the same Hook do NOT share state!
// each call to a Hook gets isolated state
/**
 * 
 * @param {*} friendID 
 */
export function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  }, [friendID]);

  return isOnline;
}
