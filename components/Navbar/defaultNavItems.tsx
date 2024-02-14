import {
  ArrowsRightLeftIcon,
  RectangleStackIcon,
  WalletIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import IPIcon from '../icons/IPIcon';
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: any;
};
export const defaultNavItems: NavItem[] = [
  {
    label: 'Transactions',
    href: '/transactions',
    icon: ArrowsRightLeftIcon,
  },
  {
    label: 'Collections',
    href: '/collections',
    icon: RectangleStackIcon,
  },
  {
    label: 'Assets',
    href: '/ipa',
    icon: IPIcon,
  },
  {
    label: 'Wallets',
    href: '/wallets',
    icon: WalletIcon,
  },
  {
    label: 'Admin',
    href: '/admin',
    icon: WrenchScrewdriverIcon,
  },
];
