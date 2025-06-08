import React from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  MobileNavigation,
  NavigationSearch,
} from "./components/navigation";
import { NavigationDemo } from "./components/NavigationDemo";
import UniformsPage from "./pages/UniformsPage";
import DocNavigation from "./components/DocNavigation";

function App() {
  const location = useLocation();
  const isUniformsPage = location.pathname.startsWith("/uniforms");

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-background">
        <MobileNavigation />
        <motion.h1
          className="text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ft.ual.com
        </motion.h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      <div className="flex relative">
        {/* Desktop Sidebar Navigation */}
        <motion.aside
          className="hidden lg:block w-80 border-r bg-background relative z-20"
          initial={{ x: -320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="sticky top-0 h-screen flex flex-col">
            {/* Header */}
            <motion.div
              className="p-6 border-b"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">ft.ual.com</h2>
              <NavigationSearch placeholder="Search navigation..." />
            </motion.div>

            {/* Navigation Menu */}
            <motion.div
              className="flex-1 overflow-y-auto p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <NavigationMenu />
            </motion.div>
          </div>
        </motion.aside>

        {/* Main Content Area - Content Apps handle their own secondary navigation */}
        <main className="flex-1 min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold mb-6">
                    Welcome to ft.ual.com
                  </h1>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Your comprehensive employee portal with enhanced
                      navigation experience.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to="/demo"
                        className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      >
                        View Navigation Demo
                      </Link>
                      <Link
                        to="/uniforms"
                        className="inline-flex items-center px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        View Uniforms Page
                      </Link>
                    </div>
                  </div>
                </motion.div>
              }
            />
            <Route path="/demo" element={<NavigationDemo />} />
            <Route path="/uniforms/*" element={<UniformsPage />} />
            <Route
              path="/my-work/*"
              element={
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-2xl font-bold mb-4">My Work</h1>
                  <p className="text-muted-foreground">
                    My Work section content would go here.
                  </p>
                </motion.div>
              }
            />
            <Route
              path="/employee-services/*"
              element={
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-2xl font-bold mb-4">Employee Services</h1>
                  <p className="text-muted-foreground">
                    Employee Services content would go here.
                  </p>
                </motion.div>
              }
            />
            <Route
              path="/news/*"
              element={
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-2xl font-bold mb-4">News</h1>
                  <p className="text-muted-foreground">
                    News content would go here.
                  </p>
                </motion.div>
              }
            />
            <Route
              path="/our-airline/*"
              element={
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-2xl font-bold mb-4">Our Airline</h1>
                  <p className="text-muted-foreground">
                    Our Airline content would go here.
                  </p>
                </motion.div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
