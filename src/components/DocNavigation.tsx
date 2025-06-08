import React from "react";
import { NavLink } from "react-router-dom";

type NavItem = {
  id: string;
  title: string;
  path: string;
};

const navItems: NavItem[] = [
  { id: "overview", title: "Overview", path: "/uniforms" },
  {
    id: "customer-service",
    title: "Customer Service",
    path: "/uniforms/customer-service",
  },
  {
    id: "flight-attendants",
    title: "Flight Attendants",
    path: "/uniforms/flight-attendants",
  },
  { id: "pilots", title: "Pilots", path: "/uniforms/pilots" },
  { id: "ramp-service", title: "Ramp Service", path: "/uniforms/ramp-service" },
  { id: "maintenance", title: "Maintenance", path: "/uniforms/maintenance" },
  { id: "move-team", title: "Move Team", path: "/uniforms/move-team" },
  { id: "wings-bars", title: "Wings and Bars", path: "/uniforms/wings-bars" },
  {
    id: "approved-pins",
    title: "Approved Pins",
    path: "/uniforms/approved-pins",
  },
  {
    id: "sizing-charts",
    title: "Sizing Charts",
    path: "/uniforms/sizing-charts",
  },
  { id: "alterations", title: "Alterations", path: "/uniforms/alterations" },
  { id: "garment-care", title: "Garment Care", path: "/uniforms/garment-care" },
  { id: "returns", title: "Returns", path: "/uniforms/returns" },
  { id: "faq", title: "Frequently Asked Questions", path: "/uniforms/faq" },
];

const DocNavigation: React.FC = () => {
  return (
    <nav
      className="sticky top-0 w-full shrink-0 h-screen overflow-y-auto bg-background"
      aria-label="Documentation navigation"
    >
      <div className="px-3 py-6">
        <h4 className="text-sm font-medium text-foreground mb-4 px-3">
          In this section
        </h4>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 px-3 text-sm transition-colors rounded-md ${
                    isActive
                      ? "text-primary font-medium bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DocNavigation;
