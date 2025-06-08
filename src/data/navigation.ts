import type { NavigationData } from "@/types/navigation";
import { getIcon } from "@/utils/icons";

/**
 * Main navigation data structure
 * Extracted from the original hard-coded menu items in App.tsx
 */
export const navigationData: NavigationData = {
  sections: [
    {
      id: "home",
      label: "Home",
      icon: getIcon("home"),
      path: "/",
      items: [],
      order: 1,
    },
    {
      id: "my-work",
      label: "My Work",
      icon: getIcon("work"),
      items: [
        {
          id: "my-department",
          label: "My Department",
          icon: getIcon("group"),
          children: [
            {
              id: "hr-academy",
              label: "HR Academy",
              icon: getIcon("school"),
              path: "/my-work/hr-academy",
            },
          ],
        },
        {
          id: "change-password",
          label: "Change My Password",
          icon: getIcon("security"),
          path: "/my-work/change-password",
        },
        {
          id: "united-email",
          label: "United Email",
          icon: getIcon("email"),
          path: "/my-work/email",
          isExternal: true,
        },
        {
          id: "coupa",
          label: "Purchases and Invoicing (Coupa)",
          icon: getIcon("assignment"),
          path: "/my-work/coupa",
          isExternal: true,
        },
        {
          id: "concur",
          label: "Expense Reports (Concur)",
          icon: getIcon("assignment"),
          path: "/my-work/concur",
          isExternal: true,
        },
      ],
      order: 2,
    },
    {
      id: "employee-services",
      label: "Employee Services",
      icon: getIcon("manage-accounts"),
      items: [
        {
          id: "total-rewards",
          label: "Total Rewards (Benefits)",
          icon: getIcon("card-giftcard"),
          children: [
            {
              id: "wellness-wayfinder",
              label: "Wellness - Physical, Emotional, Financial (Wayfinder)",
              icon: getIcon("favorite"),
              path: "/employee-services/wellness-wayfinder",
              isExternal: true,
            },
            {
              id: "health-insurance-ybr",
              label: "Health & Insurance (YBR)",
              icon: getIcon("health-safety"),
              path: "/employee-services/health-insurance-ybr",
              isExternal: true,
            },
            {
              id: "recognition-bravo",
              label: "Recognition (Bravo)",
              icon: getIcon("card-giftcard"),
              path: "/employee-services/recognition-bravo",
            },
            {
              id: "compensation-incentives",
              label: "Compensation & Incentives",
              icon: getIcon("monetization"),
              path: "/employee-services/compensation-incentives",
            },
          ],
        },
      ],
      order: 3,
    },
    {
      id: "news",
      label: "News",
      icon: getIcon("newspaper"),
      items: [
        {
          id: "news-column-1",
          label: "Column 1",
          icon: getIcon("newspaper"),
          children: [
            {
              id: "united-news",
              label: "United News",
              icon: getIcon("newspaper"),
              path: "/news/united-news",
            },
            {
              id: "wingspan-leadership-blog",
              label: "Wingspan: Leadership blog",
              icon: getIcon("menu-book"),
              path: "/news/wingspan-leadership-blog",
            },
            {
              id: "your-travel-stories",
              label: "Your travel stories",
              icon: getIcon("article"),
              path: "/news/your-travel-stories",
            },
          ],
        },
      ],
      order: 4,
    },
    {
      id: "our-airline",
      label: "Our Airline",
      icon: getIcon("flight"),
      items: [
        {
          id: "leadership-strategy",
          label: "Leadership and Strategy",
          icon: getIcon("trending-up"),
          children: [
            {
              id: "net-promoter-score",
              label: "Net Promoter Score (NPS)",
              icon: getIcon("trending-up"),
              path: "/our-airline/net-promoter-score",
            },
            {
              id: "sustainability",
              label: "Sustainability",
              icon: getIcon("nature"),
              path: "/our-airline/sustainability",
            },
            {
              id: "united-ready",
              label: "United Ready",
              icon: getIcon("security"),
              path: "/our-airline/united-ready",
            },
          ],
        },
        {
          id: "products-network",
          label: "Products and Network",
          icon: getIcon("flight"),
          children: [
            {
              id: "evolving-united-brand",
              label: "Our evolving United brand",
              icon: getIcon("business"),
              path: "/our-airline/evolving-united-brand",
            },
            {
              id: "united-polaris",
              label: "United Polaris",
              icon: getIcon("flight"),
              path: "/our-airline/united-polaris",
              isExternal: true,
            },
            {
              id: "basic-economy",
              label: "Basic Economy",
              icon: getIcon("monetization"),
              path: "/our-airline/basic-economy",
            },
            {
              id: "united-club",
              label: "United Club",
              icon: getIcon("business"),
              path: "/our-airline/united-club",
              isExternal: true,
            },
          ],
        },
        {
          id: "departments",
          label: "Departments",
          icon: getIcon("business"),
          children: [
            {
              id: "departments-view-all",
              label: "View all",
              icon: getIcon("folder"),
              path: "/our-airline/departments-all",
            },
          ],
        },
        {
          id: "locations",
          label: "Locations",
          icon: getIcon("public"),
          children: [
            {
              id: "locations-view-all",
              label: "View all",
              icon: getIcon("folder"),
              path: "/our-airline/locations-all",
            },
          ],
        },
      ],
      order: 5,
    },
  ],
};
