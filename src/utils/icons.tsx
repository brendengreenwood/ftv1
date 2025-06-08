import React from 'react';
import {
  Home as HomeIcon,
  Work as WorkIcon,
  Group as GroupIcon,
  School as SchoolIcon,
  Security as SecurityIcon,
  Email as EmailIcon,
  ManageAccounts as ManageAccountsIcon,
  CardGiftcard as CardGiftcardIcon,
  Favorite as FavoriteIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  Flight as FlightIcon,
  TrendingUp as TrendingUpIcon,
  Nature as NatureIcon,
  Business as BusinessIcon,
  MonetizationOn as MonetizationOnIcon,
  Folder as FolderIcon,
  Public as PublicIcon,
  Newspaper as NewspaperIcon,
  MenuBook as MenuBookIcon,
  Article as ArticleIcon,
  Lightbulb as LightbulbIcon,
  Notifications as NotificationsIcon,
  Hotel as HotelIcon,
  DirectionsCar as DirectionsCarIcon,
  AppRegistration as AppRegistrationIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

import type { IconName } from '@/types/navigation';

/**
 * Icon mapping for consistent icon usage across the navigation
 */
export const iconMap: Record<IconName, React.ComponentType<any>> = {
  'home': HomeIcon,
  'work': WorkIcon,
  'group': GroupIcon,
  'school': SchoolIcon,
  'security': SecurityIcon,
  'email': EmailIcon,
  'manage-accounts': ManageAccountsIcon,
  'card-giftcard': CardGiftcardIcon,
  'favorite': FavoriteIcon,
  'health-safety': HealthAndSafetyIcon,
  'flight': FlightIcon,
  'trending-up': TrendingUpIcon,
  'nature': NatureIcon,
  'business': BusinessIcon,
  'monetization': MonetizationOnIcon,
  'folder': FolderIcon,
  'public': PublicIcon,
  'newspaper': NewspaperIcon,
  'menu-book': MenuBookIcon,
  'article': ArticleIcon,
  'lightbulb': LightbulbIcon,
  'notifications': NotificationsIcon,
  'hotel': HotelIcon,
  'directions-car': DirectionsCarIcon,
  'app-registration': AppRegistrationIcon,
  'question-answer': QuestionAnswerIcon,
  'assignment': AssignmentIcon,
};

/**
 * Get an icon component by name
 */
export function getIcon(iconName: IconName, props?: any): React.ReactNode {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }
  
  return <IconComponent style={{ fontSize: "16px" }} {...props} />;
}

/**
 * Check if an icon name exists in the icon map
 */
export function hasIcon(iconName: string): iconName is IconName {
  return iconName in iconMap;
}
