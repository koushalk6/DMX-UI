import React, { useMemo } from "react";
import CardTile from "./CardTile";

const allCards = [
  {
    id: "live-chat",
    title: "Live Chat",
    subtitle: "Manage chats with a unified inbox",
    badge: "Live Chat",
  },
  {
    id: "crm-list",
    title: "CRM Contact List",
    subtitle: "Organize and manage contacts",
    badge: "Contacts",
  },
  {
    id: "bot-builder",
    title: "Bot Builder",
    subtitle: "Create conversational flows",
    badge: "Bot Builder",
  },
  {
    id: "automation",
    title: "Automation Builder",
    subtitle: "Create event-driven automations",
    badge: "Automation",
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    subtitle: "Store, orders and payments",
    badge: "Ecommerce",
  },
  {
    id: "virtual-number",
    title: "Indian Virtual Number",
    subtitle: "Buy virtual numbers",
    badge: "Numbers",
  },
  {
    id: "chat-widget",
    title: "Chat Widget",
    subtitle: "Add chat widget to your site",
    badge: "Widget",
  },
  {
    id: "channels",
    title: "Channels",
    subtitle: "Connect external channels",
    badge: "Channels",
  },
  {
    id: "payments",
    title: "Payments",
    subtitle: "Manage payments and subscriptions",
    badge: "Payments",
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    subtitle: "Manage recurring plans",
    badge: "Subscriptions",
  },
  {
    id: "integration",
    title: "API & Integrations",
    subtitle: "Connect your apps",
    badge: "API",
  },
  {
    id: "reports",
    title: "Reports",
    subtitle: "Analytics & insights",
    badge: "Reports",
  },
];

export default function CardGrid({ query }) {
  const cards = useMemo(() => {
    if (!query) return allCards;
    const q = query.toLowerCase();
    return allCards.filter((c) =>
      (c.title + " " + c.subtitle + " " + c.badge).toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <CardTile key={c.id} {...c} />
        ))}
      </div>

      <div className="mt-6">
        <div className="card-border rounded-md bg-white p-4 shadow-sm w-56">
          <div className="text-sm font-medium text-slate-600">Payments</div>
          <div className="mt-2 text-xs text-slate-400">
            Manage payments and subscriptions
          </div>
          <div className="mt-3">
            <button className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-md">
              Go to Payments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
