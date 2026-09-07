import React, { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore.js';
import NoChatsFound from './NoChatsFound.jsx';
import UsersLoadingSkeleton from './UsersLoadingSkeleton.jsx';

function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();

  useEffect(() => {
    getMyChatPartners()
  }, [getMyChatPartners])

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />

  return (
    <>
      {chats.map((chat) => {
        return (
          <div
            key={chat._id}
            className="bg-cyan-500/10 p-4 rounded cursor-pointer hover:bg-cyan-500/20 transition-colors"
            onClick={() => setSelectedUser(chat)}
          >
            <div className="flex items-center gap-3">
              {/* TODO: FIX THIS ONLINE STATUS AND MAKE IT WORK WITH SOCKET */}
              <div className={`avatar online`}>
                <div className="size-12 rounded-full">
                  <img
                    src={chat.profilePic || "/../../../image/profile.jpg"}
                    alt={chat.fullName}
                  />
                </div>
              </div>
              <h4 className="text-slate-200  font-medium truncate">
                {chat.fullName || "Unnamed User"}
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ChatsList