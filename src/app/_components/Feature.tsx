import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

export default function Feature({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-baseline text-sm text-gray-700">
      <CheckCircle2 className="size-4  text-green-500  mr-2" />
      <span className="text-[17px] font-normal">{children}</span>
    </div>
  );
}
