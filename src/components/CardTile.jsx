import React from "react";

export default function CardTile({ title, subtitle, badge }) {
  return (
    <div className="bg-white card-border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-slate-700">{title}</div>
          <div className="mt-2 text-xs text-slate-500">{subtitle}</div>
        </div>
        <div className="text-xs text-slate-400">{badge}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-slate-400">Status</div>
        <button className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-md">
          Go
        </button>
      </div>
    </div>
  );
}
