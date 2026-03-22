import DisclaimerBanner from "@/components/dashboard/DisclaimerBanner";
import PayloadGenerator from "@/components/dashboard/PayloadGenerator";
import PayloadLibrary from "@/components/dashboard/PayloadLibrary";
import { Activity, Shield } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-8 lg:pt-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Generate and manage obfuscated payloads for authorized testing
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <Activity className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">System Active</span>
        </div>
      </div>

      {/* Disclaimer */}
      <DisclaimerBanner />

      {/* Generator */}
      <PayloadGenerator />

      {/* Library */}
      <PayloadLibrary />
    </div>
  );
}
