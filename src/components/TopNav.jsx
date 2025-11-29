import React from "react";

function IconSearch() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35"
      />
      <circle
        cx="10.5"
        cy="10.5"
        r="6.5"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-5-5.917V4a2 2 0 10-4 0v1.083A6.002 6.002 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h13z"
      />
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.73 21a2 2 0 01-3.46 0"
      />
    </svg>
  );
}

export default function TopNav({
  brand,
  tabs,
  activeTab,
  onChangeTab,
  onSearch,
}) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-8 rounded-md bg-emerald-700 grid place-items-center text-white font-bold text-xs">
              {brand}
            </div>
            <div>
              <div className="text-base font-semibold">{brand}</div>
              <div className="text-xs text-slate-400">Admin</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-2 items-center ml-4">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => onChangeTab(t)}
                className={`px-3 py-2 text-sm rounded-md ${
                  activeTab === t
                    ? "text-emerald-700 bg-emerald-50 font-medium"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search..."
              className="hidden sm:block w-56 text-sm bg-slate-50 rounded-md px-3 py-2 border border-transparent focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
          </div>

          <button className="p-2 rounded-md hover:bg-slate-50">
            <IconSearch />
          </button>
          <button className="p-2 rounded-md hover:bg-slate-50">
            <IconBell />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 grid place-items-center text-white text-sm font-medium">
            K
          </div>
        </div>
      </div>
    </header>
  );
}
