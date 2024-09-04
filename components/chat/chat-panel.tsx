import * as React from "react";
import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/chat/prompt-form";
import { ButtonScrollToBottom } from "@/components/chat/button-scroll-to-bottom";
// import { IconShare } from '@/components/ui/icons'
import { FooterText } from "@/components/chat/footer";
import { cn } from "@/lib/utils";
import { message } from "./chat";
import { Share } from "lucide-react";

export interface ChatPanelProps {
  id?: string;
  title?: string;
  input: string;
  setInput: (value: string) => void;
  isAtBottom: boolean;
  scrollToBottom: () => void;
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom,
}: ChatPanelProps) {
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);

  const exampleMessages = [
    {
      heading: "List flights flying from",
      subheading: "San Francisco to Rome today",
      message: `List flights flying from San Francisco to Rome today`,
    },
    {
      heading: "What is the status",
      subheading: "of flight BA142?",
      message: "What is the status of flight BA142?",
    },
  ];

  return (
    <div className="w-full duration-300 ease-in-out peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px] dark:from-10%">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid sm:grid-cols-2 gap-2 sm:gap-4 px-4 sm:px-0">
          {message.length === 0 &&
            exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={cn(
                  "cursor-pointer bg-zinc-50 text-zinc-950 rounded-2xl p-4 sm:p-6 hover:bg-zinc-100 transition-colors",
                  index > 1 && "hidden md:block"
                )}
              >
                <div className="font-medium">{example.heading}</div>
                <div className="text-sm text-zinc-800">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        {message?.length >= 2 ? (
          <div className="flex h-fit items-center justify-center">
            <div className="flex space-x-2">
              {id && title ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShareDialogOpen(true)}
                  >
                    <Share className="mr-2" />
                    Share
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="grid gap-3 sm:pb-4">
          <PromptForm input={input} setInput={setInput} />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
