import React, { useState } from "react";
import TopNav from "./components/TopNav";
import CardGrid from "./components/CardGrid";
import FloatingAction from "./components/FloatingAction";
import RightPanel from "./components/RightPanel";

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [query, setQuery] = useState("");

  const tabs = [
    "Dashboard",
    "WhatsApp",
    "Bot Builder",
    "Automation",
    "Broadcast",
    "Payments",
    "Channels",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav
        brand="DMX"
        tabs={tabs}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        onSearch={setQuery}
      />

      <div className="max-w-6xl w-full mx-auto px-4 lg:px-6 py-6 flex gap-6">
        <main className="flex-1">
          <h2 className="text-sm text-slate-500 mb-3">
            Welcome back — {activeTab}
          </h2>
          <CardGrid activeTab={activeTab} query={query} />
        </main>

        <aside className="w-72 hidden lg:block">
          <RightPanel />
        </aside>
      </div>

      <FloatingAction />

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 shadow-sm sm:hidden">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          {["Home", "Explore", "Search", "Alerts"].map((n) => (
            <button
              key={n}
              className="flex flex-col items-center text-xs text-slate-600"
            >
              <span className="block w-6 h-6 rounded-md bg-slate-100/60 grid place-items-center text-slate-700 text-sm">
                ●
              </span>
              <span className="mt-1">{n}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
