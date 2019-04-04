import { users } from './App';
export const ChatAPI = {
  subscribeToFriendStatus: (id, handler) => {
    handler({ isOnline: null });
    window.setTimeout(function() {
      const user = users.find(u => u.id === id);
      handler({ isOnline: user.isOnline });
    }, 1000);
  },
  unsubscribeFromFriendStatus: (id, handler) => {
    window.setTimeout(function() {
      handler({ isOnline: null });
    }, 1000);
  }
};
