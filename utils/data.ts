import {
  Cash,
  Dashboard,
  OpenBook,
  Settings,
  User,
} from "@/app/_components/Icons";

export const test = [
  {
    name: "Nancy Luthor",
    signupDate: "Jul-10-25",
    status: "active",
  },
  {
    name: "Grace Hathaway",
    signupDate: "Jul-10-25",
    status: "active",
  },
  {
    name: "Andrew Lee",
    signupDate: "Jul-10-25",
    status: "active",
  },
  {
    name: "Joseph Johnson",
    signupDate: "Jul-10-25",
    status: "active",
  },
];

export const metrics = [
  {
    event: "New Users",
    eventCount: 10_024,
    description: "70% increase vs last month",
    type: "blue",
    Icon: User,
  },
  {
    event: "Subscriptions",
    eventCount: 1227,
    description: "10% decrease vs last month",
    type: "danger",
    Icon: Cash,
  },
  {
    event: "Revenue",
    eventCount: 28027,
    description: "4.8% increase vs last month",
    type: "blue",
    Icon: OpenBook,
  },
  {
    event: "New Users",
    eventCount: 10_024,
    description: "70% increase vs last month",
    type: "blue",
    Icon: User,
  },
];

export const navLinks = [
  { location: "Dashboard", href: "/", Icon: Dashboard },
  { location: "Settings", href: "/settings", Icon: Settings },
  { location: "Notifications", href: "/notifications", Icon: Settings },
];
