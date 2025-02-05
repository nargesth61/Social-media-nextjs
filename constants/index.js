import { Home, Search, Bell, Pencil, Users, User } from "lucide-react";

export const sidebarLinks = [
  {
    icon: <Home size={24} />,
    route: "/",
    label: "Home",
  },
  {
    icon: <Search size={24} />,
    route: "/search",
    label: "Search",
  },
  {
    icon: <Bell size={24} />,
    route: "/notifications",
    label: "Notifications",
  },
  {
    icon: <Pencil size={24} />,
    route: "/create-tweet",
    label: "Tweet",
  },
  {
    icon: <Users size={24} />,
    route: "/groups",
    label: "Groups",
  },
  {
    icon: <User size={24} />,
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "tweets", label: "Tweets", icon: <Pencil size={20} /> },
  { value: "replies", label: "Replies", icon: <Bell size={20} /> },
];

export const groupTabs = [
  { value: "tweets", label: "Tweets", icon: <Pencil size={20} /> },
  { value: "members", label: "Members", icon: <Users size={20} /> },
];