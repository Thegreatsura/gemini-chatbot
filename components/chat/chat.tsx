'use client'

import { ChatList, messages } from '@/components/chat/chat-list'
import { ChatPanel } from '@/components/chat/chat-panel'
import { EmptyScreen } from '@/components/chat/empty-screen'
import { Message } from '@/lib/chat/actions'
import { useScrollAnchor } from '@/components/chat/use-scroll-anchor'
import { Session } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
  session?: Session
  missingKeys: string[]
}

export const message: messages[] = [
  {
    id: 'cdkfdkfm',
    message: 'hello'
  },
  {
    id: 'cdkfdkfm',
    message: 'dev'
  },
  {
    id: 'cdkfdkfm',
    message: 'and'
  },
  {
    id: 'cdkfdkfm',
    message: 'sam'
  }
]

export function Chat() {
  const [input, setInput] = useState('')

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor()

  return (
    <div
      className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
      ref={scrollRef}
    >
      <div className={cn('pb-[200px] pt-4')} ref={messagesRef}>
        {message.length ? <ChatList messages={message} /> : <EmptyScreen />}
        <div className="h-px w-full" ref={visibilityRef} />
      </div>
      <ChatPanel
        id={'jjjdjd'}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  )
}
