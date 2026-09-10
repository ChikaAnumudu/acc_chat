import { MessageCircleCode, MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
function NoConversationPlaceholder() {
    const { setActiveTab } = useChatStore();
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <div className="size-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
          <MessageCircleIcon className="size-10 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200 font-medium mb-1">
            Select a conversation
          </h3>
          <p className="text-slate-400 max-w-md">
            Choose a contact from the siderbar to start chatting or continue a previous conversation.
          </p>
        </div>

      </div>
    );
}

export default NoConversationPlaceholder;
