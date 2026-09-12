import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore.js";
import NoChatsFound from "./NoChatsFound.jsx";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton.jsx";
import { useAuthStore } from "../store/useAuthStore.js";
import { connect } from "socket.io-client";
import { Contact } from "lucide-react";

function ContactList() {
  const {
    getAllContacts,
    allContacts,
    isUsersLoading,
    setSelectedUser,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (allContacts.length === 0) return <NoChatsFound />;
  
  return (
    <>
      {allContacts.map((allContact) => {
        return (
          <div
            key={allContact._id}
            className="bg-cyan-500/10 p-4 rounded cursor-pointer hover:bg-cyan-500/20 transition-colors"
            onClick={() => setSelectedUser(allContact)}
          >
            <div className="flex items-center gap-3">
              {/* TODO: FIX THIS ONLINE STATUS AND MAKE IT WORK WITH SOCKET */}
              <div
                className={`avatar ${onlineUsers.includes(allContact._id) ? "online" : "offline"}`}
              >
                <div className="size-12 rounded-full">
                  <img
                    src={allContact.profilePic || "/../../../image/profile.jpg"}
                    alt={allContact.fullName}
                  />
                </div>
              </div>
              <h4 className="text-slate-200  font-medium truncate">
                {allContact.fullName || "Unnamed User"}
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ContactList;
