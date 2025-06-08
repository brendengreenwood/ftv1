import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const sections = [
  { id: 'order-uniforms', text: 'Order Uniforms' },
  { id: 'work-groups', text: 'Work Groups' },
  { id: 'identification-standards', text: 'Identification Standards' },
  { id: 'uniform-sizing-care', text: 'Uniform Sizing & Care' },
  { id: 'faq', text: 'Frequently Asked Questions' },
  { id: 'about', text: 'About the Uniform Program' },
];

const FullWidthSelect = styled(Select)({
  '& .MuiPaper-root': {
    width: '100vw',
    maxWidth: '100vw',
    left: '0 !important',
  },
});

const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 1.0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionChange = (event: any) => {
    const sectionId = event.target.value;
    setSelectedSection(sectionId);
    
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // Get the active section text
  const getActiveSectionText = () => {
    const section = sections.find(s => s.id === activeId);
    return section ? section.text : '';
  };

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden flex items-center gap-2">
        <FormControl size="small" className="min-w-[140px]">
          <FullWidthSelect
            value={selectedSection}
            onChange={handleSectionChange}
            displayEmpty
            className="bg-white"
            renderValue={() => "On This Page"}
            MenuProps={{
              PaperProps: {
                style: {
                  width: '100vw',
                  maxWidth: '100vw',
                  left: '0 !important',
                  marginTop: '8px',
                },
              },
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
            }}
          >
            {sections.map((section) => (
              <MenuItem key={section.id} value={section.id}>
                {section.text}
              </MenuItem>
            ))}
          </FullWidthSelect>
        </FormControl>
        <div className="text-sm text-gray-600 truncate">
          {getActiveSectionText()}
        </div>
      </div>

      {/* Desktop View */}
      <nav
        className="w-48 shrink-0 hidden lg:block sticky top-0 max-h-screen overflow-y-auto py-6 pl-4"
        aria-label="Table of contents"
      >
        <h4 className="text-sm font-medium text-gray-900 mb-4">On this page</h4>
        <ul className="space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block py-1 ${
                  activeId === section.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {section.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TableOfContents;