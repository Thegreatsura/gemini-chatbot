import { ScrollArea } from "../ui/scroll-area";
import { ThemeToggle } from "./theme-toggle";

export type messages = {
  id: string;
  message: string;
};

export interface ChatList {
  messages: messages[];
}

export function ChatList({ messages }: ChatList) {
  return messages.length ? (
    <div className="relative mx-auto max-w-2xl grid auto-rows-max gap-8 px-4">
      <ScrollArea className="">
        <div className="flex flex-col space-y-2">
          {messages.map((message) => (
            <div className="h-10 bg-slate-500 rounded-md" key={message.id}>
              {message.message}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ) : null;
}
