import React from "react";
import { ContentAppLayout } from "../components/layout/ContentAppLayout";
import { ContentAppProvider } from "../components/layout/ContentAppProvider";
import { ContentAppSecondaryNav } from "../components/layout/ContentAppSecondaryNav";
import TableOfContents from "../components/TableOfContents";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import FlightIcon from "@mui/icons-material/Flight";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EngineeringIcon from "@mui/icons-material/Engineering";
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

// Work group data for the main cards (matching Figma design exactly)
const workGroups = [
  {
    id: "customer-service",
    title: "Customer Service",
    description: "View standards",
    path: "/uniforms/customer-service",
    icon: PersonIcon,
    image: "/images/uniforms/customer-service.png",
  },
  {
    id: "flight-attendants",
    title: "Flight Attendants",
    description: "View standards",
    path: "/uniforms/flight-attendants",
    icon: PersonIcon,
    image: "/images/uniforms/empty-card.png",
  },
  {
    id: "pilots",
    title: "Pilots",
    description: "View standards",
    path: "/uniforms/pilots",
    icon: FlightIcon,
    image: "/images/uniforms/pilots.png",
  },
  {
    id: "ramp-service",
    title: "Ramp Service",
    description: "View standards",
    path: "/uniforms/ramp-service",
    icon: LocalShippingIcon,
    image: "/images/uniforms/ramp-service.png",
  },
  {
    id: "tech-ops",
    title: "Tech Ops",
    description: "View standards",
    path: "/uniforms/maintenance",
    icon: EngineeringIcon,
    image: "/images/uniforms/tech-ops.png",
  },
  {
    id: "move-team",
    title: "Move Team",
    description: "View standards",
    path: "/uniforms/move-team",
    icon: BuildIcon,
    image: "/images/uniforms/move-team.png",
  },
];

const UniformsPage = () => {
  return (
    <ContentAppProvider>
      <ContentAppLayout
        title="Employee Uniforms and Appearance Standards"
        subtitle="Your one-stop resource for all uniforms and appearance needs at United Airlines"
        icon={<WorkIcon className="w-8 h-8" />}
        theme="blue"
        secondaryNav={
          <ContentAppSecondaryNav
            title="In this section"
            items={uniformsNavItems}
          />
        }
        tableOfContents={
          <TableOfContents
            title="On this page"
            items={[
              { id: "welcome", title: "Welcome" },
              { id: "work-groups", title: "Work Groups" },
              { id: "identification", title: "Identification Standards" },
              { id: "care-maintenance", title: "Care & Maintenance" },
              { id: "news-updates", title: "News and Updates" },
            ]}
          />
        }
      >
        <div className="p-8 space-y-8">
          {/* Welcome Section Card */}
          <motion.section
            id="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <CardContent className="space-y-4">
                <h1 className="text-4xl font-bold text-black">Welcome!</h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  This portal is our one-stop resource for all uniforms and
                  appearance needs at United Airlines. Find current appearance
                  standards, ordering information, and vendor links in one
                  convenient location. Whether you're a new hire or replacing
                  items, easily access what you need to represent United
                  professionally. Use the navigation menu or search function to
                  quickly locate specific information.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Work Groups Section Card */}
          <motion.section
            id="work-groups"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-black">
                    Uniforms standards and appearance guidelines
                  </h2>
                  <p className="text-lg text-gray-600">
                    Select your work group to view standards, guidelines, and
                    order your uniform
                  </p>
                </div>

                {/* Work Group Cards Grid - 3 columns to match Figma */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {workGroups.map((group, index) => (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Link to={group.path}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg overflow-hidden group">
                          <CardContent className="p-0">
                            {/* Image Section */}
                            <div className="h-48 bg-gray-100 relative overflow-hidden">
                              <img
                                src={group.image}
                                alt={group.title}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Content Section with blue left border */}
                            <div className="p-4 space-y-1 border-l-4 border-blue-600">
                              <h3 className="text-lg font-bold text-black group-hover:text-blue-700 transition-colors">
                                {group.title}
                              </h3>
                              <p className="text-base text-blue-600 font-normal">
                                {group.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Identification Standards Section Card */}
          <motion.section
            id="identification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-black">
                    Identification Standards
                  </h2>
                  <p className="text-lg text-gray-600">
                    Access current guidelines for name badges and approved pins
                    in one compliance with company standards.
                  </p>
                </div>

                {/* Two-card layout for identification items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Uniform Identifiers Card */}
                  <Link to="/uniforms/wings-bars">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg overflow-hidden group">
                      <CardContent className="p-0">
                        {/* Image Section */}
                        <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                          <img
                            src="/images/uniforms/uniform-identifiers.png"
                            alt="Uniform identifiers - wings and badges"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content Section with blue left border */}
                        <div className="p-4 space-y-1 border-l-4 border-blue-600">
                          <h3 className="text-lg font-bold text-black group-hover:text-blue-700 transition-colors">
                            Uniform identifiers
                          </h3>
                          <p className="text-base text-blue-600 font-normal">
                            View standards
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Approved Pins Card */}
                  <Link to="/uniforms/approved-pins">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg overflow-hidden group">
                      <CardContent className="p-0">
                        {/* Image Section */}
                        <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                          <img
                            src="/images/uniforms/approved-pins.png"
                            alt="Approved pins"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content Section with blue left border */}
                        <div className="p-4 space-y-1 border-l-4 border-blue-600">
                          <h3 className="text-lg font-bold text-black group-hover:text-blue-700 transition-colors">
                            Approved pins
                          </h3>
                          <p className="text-base text-blue-600 font-normal">
                            View standards
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Uniform Care and Maintenance Section Card */}
          <motion.section
            id="care-maintenance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-black">
                    Uniform care and maintenance
                  </h2>
                  <p className="text-lg text-gray-600">
                    Find guidelines for proper sizing, alteration options,
                    garment care instructions, and information on uniform or
                    recycling of uniform items.
                  </p>
                </div>

                {/* 2x2 Grid of simple cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Measurement guide */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Measurement guide
                    </h3>
                    <Link
                      to="/uniforms/sizing-charts"
                      className="text-blue-600 hover:text-blue-700 font-normal"
                    >
                      View
                    </Link>
                  </div>

                  {/* Alterations */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Alterations
                    </h3>
                    <Link
                      to="/uniforms/alterations"
                      className="text-blue-600 hover:text-blue-700 font-normal"
                    >
                      View
                    </Link>
                  </div>

                  {/* Garment care */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Garment care
                    </h3>
                    <Link
                      to="/uniforms/garment-care"
                      className="text-blue-600 hover:text-blue-700 font-normal"
                    >
                      View
                    </Link>
                  </div>

                  {/* Returns and disposals */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Returns and disposals
                    </h3>
                    <Link
                      to="/uniforms/returns"
                      className="text-blue-600 hover:text-blue-700 font-normal"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* News and Updates Section Card */}
          <motion.section
            id="news-updates"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-black">
                    News and updates
                  </h2>
                  <Link
                    to="/uniforms/news"
                    className="text-blue-600 hover:text-blue-700 font-normal"
                  >
                    View all
                  </Link>
                </div>

                {/* Three news cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* News Card 1 */}
                  <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="h-48 bg-gray-100 relative overflow-hidden">
                        <img
                          src="/images/uniforms/airplane-news.png"
                          alt="United Airlines aircraft"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-bold text-black leading-tight">
                          Card title lorem ipsum dolor sit amet consectetur elit
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>8 minutes ago</span>
                          <div className="flex items-center gap-1">
                            <span>👍</span>
                            <span>23</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* News Card 2 */}
                  <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="h-48 bg-gray-100 relative overflow-hidden">
                        <img
                          src="/images/uniforms/airplane-news.png"
                          alt="United Airlines aircraft"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-bold text-black leading-tight">
                          Card title lorem ipsum dolor sit amet consectetur elit
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>8 minutes ago</span>
                          <div className="flex items-center gap-1">
                            <span>👍</span>
                            <span>23</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* News Card 3 */}
                  <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="h-48 bg-gray-100 relative overflow-hidden">
                        <img
                          src="/images/uniforms/airplane-news.png"
                          alt="United Airlines aircraft"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-bold text-black leading-tight">
                          Card title lorem ipsum dolor sit amet consectetur elit
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>8 minutes ago</span>
                          <div className="flex items-center gap-1">
                            <span>👍</span>
                            <span>23</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </ContentAppLayout>
    </ContentAppProvider>
  );
};

export default UniformsPage;
