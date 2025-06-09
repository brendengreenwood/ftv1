import React from "react";
import { ContentAppLayout } from "../components/layout/ContentAppLayout";
import { ContentAppProvider } from "../components/layout/ContentAppProvider";
import { ContentAppSecondaryNav } from "../components/layout/ContentAppSecondaryNav";
import TableOfContents from "../components/TableOfContents";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";

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
          className="p-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto space-y-section">
            <section id="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    Welcome to Employee Uniforms
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Welcome to the United Airlines uniform program. Here you'll
                    find everything you need to know about ordering,
                    maintaining, and wearing your uniform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-component">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Quick Start</CardTitle>
                        <CardDescription>
                          New to the uniform program? Start here for essential
                          information.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Order Status</CardTitle>
                        <CardDescription>
                          Track your current uniform orders and delivery status.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="customer-service">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Service Uniforms</CardTitle>
                  <CardDescription>
                    Information about customer service uniform requirements and
                    options.
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section id="flight-attendants">
              <Card>
                <CardHeader>
                  <CardTitle>Flight Attendant Uniforms</CardTitle>
                  <CardDescription>
                    Comprehensive guide to flight attendant uniform standards
                    and care.
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section id="pilots">
              <Card>
                <CardHeader>
                  <CardTitle>Pilot Uniforms</CardTitle>
                  <CardDescription>
                    Pilot uniform specifications, insignia, and maintenance
                    guidelines.
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section id="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions and answers about the uniform program.
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        </motion.div>
      </ContentAppLayout>
    </ContentAppProvider>
  );
};

export default UniformsPage;
