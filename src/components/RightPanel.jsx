import React from "react";

export default function RightPanel() {
  return (
    <div className="sticky top-20 space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-sm card-border">
        <div className="text-sm font-semibold">Quick Links</div>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50">
              Create Bot
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50">
              Buy Number
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50">
              View Reports
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm card-border">
        <div className="text-sm font-medium">Notifications</div>
        <div className="mt-2 text-xs text-slate-500">
          No new notifications
        </div>
      </div>
    </div>
  );
}
