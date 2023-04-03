import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  WalletIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  { name: "Members", href: "/members", icon: UserGroupIcon, current: false },
  {
    name: "Proposals",
    href: "/proposals",
    icon: ClipboardDocumentCheckIcon,
    current: true,
  },
  { name: "Finances", href: "/finances", icon: WalletIcon, current: false },
  { name: "Settings", href: "/settings", icon: CogIcon, current: false },
];
