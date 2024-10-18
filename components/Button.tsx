import { RainbowButton } from "@/components/ui/rainbow-button";
import { MapPin } from "lucide-react";

export function AnimatedShinyTextDemo() {
  return (
    <>
      <div className="flex items-center gap-6">
        <RainbowButton>Ubícanos <MapPin className="w-4 ml-2" /></RainbowButton>
      </div>
    </>
  );
}
