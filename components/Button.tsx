import { RainbowButton } from "@/components/ui/rainbow-button";
import { MapPin } from "lucide-react";

export function AnimatedShinyTextDemo() {
  return (
    <>
      <div className="flex items-center gap-6">
        <RainbowButton onClick={() => {
          const element = document.getElementById('map');
          element?.scrollIntoView(
            { behavior: "smooth" }
          )
        }}>
          Ubícanos <MapPin className="w-4 ml-2" /></RainbowButton>
      </div>
    </>
  );
}
