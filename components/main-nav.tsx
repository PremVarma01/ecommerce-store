"use client";

import { cn } from "@/libs/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 \
            dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 \
             hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200",
            route.active ? "text-black bg-slate-100" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
