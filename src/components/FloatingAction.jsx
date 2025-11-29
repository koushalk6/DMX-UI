import React, { useState } from "react";

export default function FloatingAction() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-6 z-40">
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full shadow-2xl grid place-items-center text-white text-2xl"
          style={{
            background:
              "linear-gradient(135deg,#00c0ff 0%,#00c0ff 40%,#00e0ff 100%)",
          }}
        >
          +
        </button>

        {open && (
          <div className="absolute right-0 bottom-20 w-48 bg-white rounded-lg shadow-lg p-3">
            <button className="w-full text-left text-sm px-3 py-2 hover:bg-slate-50 rounded-md">
              New Campaign
            </button>
            <button className="w-full text-left text-sm px-3 py-2 hover:bg-slate-50 rounded-md">
              Add Number
            </button>
            <button className="w-full text-left text-sm px-3 py-2 hover:bg-slate-50 rounded-md">
              Upload Contacts
            </button>
            <div className="mt-2 text-xs text-slate-400">Quick actions</div>
          </div>
        )}
      </div>
    </div>
  );
}
