import { ThemeToggle } from '../theme-toggle'

export type messages = {
  id: string
  message: string
}

export interface ChatList {
  messages: messages[]
}

export function ChatList({ messages }: ChatList) {
  return messages.length ? (
    <div className="relative mx-auto max-w-2xl grid auto-rows-max gap-8 px-4">
      <ThemeToggle />

      {messages.map(message => (
        <div key={message.id}>{message.message}</div>
      ))}
    </div>
  ) : null
}
