import React from 'react';
import { motion } from 'framer-motion';
import { NavigationMenu, MobileNavigation, NavigationSearch } from './navigation';
import { cn } from '@/lib/utils';

export function NavigationDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <MobileNavigation />
        <h1 className="text-lg font-semibold">Navigation Demo</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <motion.aside 
          className="hidden lg:block w-80 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
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
              <h2 className="text-xl font-bold mb-4">Navigation</h2>
              <NavigationSearch placeholder="Search menu items..." />
            </motion.div>

            {/* Navigation */}
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

        {/* Main Content */}
        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl font-bold mb-6">Navigation Animation Demo</h1>
            
            <div className="grid gap-6">
              <motion.div 
                className="p-6 border rounded-lg bg-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-3">✨ Animation Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Smooth accordion expand/collapse animations</li>
                  <li>• Staggered item entrance animations</li>
                  <li>• Hover and tap feedback on interactive elements</li>
                  <li>• Mobile slide-in navigation with backdrop</li>
                  <li>• Search dropdown with smooth transitions</li>
                  <li>• Icon rotation animations for section toggles</li>
                  <li>• Respects user's motion preferences</li>
                </ul>
              </motion.div>

              <motion.div 
                className="p-6 border rounded-lg bg-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-3">🎯 Try These Interactions</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Click on navigation sections to see accordion animations</li>
                  <li>• Hover over navigation items for subtle feedback</li>
                  <li>• Use the search to see dropdown animations</li>
                  <li>• On mobile, tap the menu button for slide-in navigation</li>
                  <li>• Notice the staggered loading of navigation items</li>
                </ul>
              </motion.div>

              <motion.div 
                className="p-6 border rounded-lg bg-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-3">🔧 Technical Implementation</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Built with Framer Motion for smooth animations</li>
                  <li>• Uses shadcn/ui components for accessibility</li>
                  <li>• Modular component architecture</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Responsive design with mobile-first approach</li>
                  <li>• Optimized performance with AnimatePresence</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
