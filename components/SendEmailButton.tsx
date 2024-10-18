import React from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

export function AnimatedSubscribeButtonDemo() {
  return (
    <div className="flex flex-col items-center">
      <AnimatedSubscribeButton
        buttonColor="#000000"
        buttonTextColor="#ffffff"
        subscribeStatus={false} // Initial subscription status
        initialText={
          <span className="flex items-center mx-6">
            Enviar{" "}
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300" />
          </span>
        }
        changeText={
          <span className="flex items-center justify-center mx-6">
            <CheckIcon className="mr-2 size-4" />
            Enviado
          </span>
        }
      />
    </div>
  );
}
