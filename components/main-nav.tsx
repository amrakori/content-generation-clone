"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  PenSquare,
  BarChart3,
  Settings,
  Calendar,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Create",
    icon: PenSquare,
    href: "/create",
    color: "text-violet-500",
  },
  {
    label: "Schedule",
    icon: Calendar,
    href: "/schedule",
    color: "text-pink-700",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6 py-4">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={pathname === route.href ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === route.href
              ? "bg-accent hover:bg-accent"
              : "hover:bg-transparent hover:underline"
          )}
          asChild
        >
          <Link
            href={route.href}
            className="flex items-center gap-2"
          >
            <route.icon className={cn("h-5 w-5", route.color)} />
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}