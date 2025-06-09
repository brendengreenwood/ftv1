import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  title?: string;
  items?: TableOfContentsItem[];
}

const FullWidthSelect = styled(Select)({
  "& .MuiPaper-root": {
    width: "100vw",
    maxWidth: "100vw",
    left: "0 !important",
  },
});

const TableOfContents: React.FC<TableOfContentsProps> = ({
  title = "On this page",
  items = [],
}) => {
  const [activeId, setActiveId] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [sections, setSections] = useState<TableOfContentsItem[]>([]);

  // Auto-detect sections if no items provided
  useEffect(() => {
    if (items.length > 0) {
      setSections(items);
    } else {
      // Auto-detect sections from the page
      const detectedSections: TableOfContentsItem[] = [];
      const headings = document.querySelectorAll(
        "section[id], h1[id], h2[id], h3[id]"
      );

      headings.forEach((heading) => {
        if (heading.id) {
          const title = heading.textContent?.trim() || heading.id;
          detectedSections.push({ id: heading.id, title });
        }
      });

      setSections(detectedSections);
    }
  }, [items]);

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
        rootMargin: "-20% 0% -35% 0%",
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
  }, [sections]);

  const handleSectionChange = (event: any) => {
    const sectionId = event.target.value;
    setSelectedSection(sectionId);

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Get the active section text
  const getActiveSectionText = () => {
    const section = sections.find((s) => s.id === activeId);
    return section ? section.title : "";
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
            renderValue={() => title}
            MenuProps={{
              PaperProps: {
                style: {
                  width: "100vw",
                  maxWidth: "100vw",
                  left: "0 !important",
                  marginTop: "8px",
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
          >
            {sections.map((section) => (
              <MenuItem key={section.id} value={section.id}>
                {section.title}
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
        <h4 className="text-sm font-medium text-gray-900 mb-4">{title}</h4>
        <ul className="space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block py-1 ${
                  activeId === section.id
                    ? "text-blue-600 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TableOfContents;
