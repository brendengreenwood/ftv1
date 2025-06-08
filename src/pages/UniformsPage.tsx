import React from "react";
import { ContentAppLayout } from "../components/layout/ContentAppLayout";
import { ContentAppProvider } from "../components/layout/ContentAppProvider";
import { ContentAppSecondaryNav } from "../components/layout/ContentAppSecondaryNav";
import TableOfContents from "../components/TableOfContents";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";

// Navigation items for the uniforms section
const uniformsNavItems = [
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

const UniformsPage = () => {
  return (
    <ContentAppProvider>
      <ContentAppLayout
        title="Employee Uniforms"
        subtitle="Everything you need to know about ordering, maintaining, and wearing your uniform"
        icon={<WorkIcon className="w-8 h-8" />}
        theme="blue"
        secondaryNav={
          <ContentAppSecondaryNav
            title="In this section"
            items={uniformsNavItems}
          />
        }
        tableOfContents={<TableOfContents />}
      >
        {/* Content Area */}
        <motion.div
          className="px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Welcome to Employee Uniforms
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to the United Airlines uniform program. Here you'll find
                everything you need to know about ordering, maintaining, and
                wearing your uniform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Quick Start</h3>
                  <p className="text-muted-foreground">
                    New to the uniform program? Start here for essential
                    information.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Order Status</h3>
                  <p className="text-muted-foreground">
                    Track your current uniform orders and delivery status.
                  </p>
                </div>
              </div>
            </section>

            <section id="customer-service" className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Customer Service Uniforms
              </h2>
              <p className="text-muted-foreground">
                Information about customer service uniform requirements and
                options.
              </p>
            </section>

            <section id="flight-attendants" className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Flight Attendant Uniforms
              </h2>
              <p className="text-muted-foreground">
                Comprehensive guide to flight attendant uniform standards and
                care.
              </p>
            </section>

            <section id="pilots" className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Pilot Uniforms
              </h2>
              <p className="text-muted-foreground">
                Pilot uniform specifications, insignia, and maintenance
                guidelines.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions and answers about the uniform program.
              </p>
            </section>
          </div>
        </motion.div>
      </ContentAppLayout>
    </ContentAppProvider>
  );
};

export default UniformsPage;
