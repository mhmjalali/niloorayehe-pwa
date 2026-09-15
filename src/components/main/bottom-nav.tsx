"use client";

import { motion } from "motion/react";
import {
  AcademyIcon,
  BagIcon,
  HomeIcon,
  StoreIcon,
  UserIcon,
} from "@/assets/icons";
import { Link } from "@/i18n/navigation";

const NAV_ITEMS = [
  { href: "/", label: "خانه", Icon: HomeIcon },
  { href: "/store", label: "فروشگاه", Icon: StoreIcon },
  { href: "/academy", label: "آکادمی", Icon: AcademyIcon },
  { href: "/profile", label: "پروفایل", Icon: UserIcon },
] as const;

const CENTER_HOLE_MASK =
  "radial-gradient(circle 36px at 50% 0, transparent 0 36px, black 37px)";

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 h-17"
      aria-label="Bottom navigation"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 border-white border-t bg-white/50 backdrop-blur-md"
        style={{
          maskImage: CENTER_HOLE_MASK,
          WebkitMaskImage: CENTER_HOLE_MASK,
        }}
      />

      <ul className="relative grid h-full grid-cols-5 items-center">
        {NAV_ITEMS.slice(0, 2).map(({ href, label, Icon }) => (
          <li key={href} className="flex justify-center">
            <Link
              href={href}
              className="flex flex-col items-center gap-1.5 text-text"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-primary">{label}</span>
            </Link>
          </li>
        ))}

        <li aria-hidden="true" />

        {NAV_ITEMS.slice(2).map(({ href, label, Icon }) => (
          <li key={href} className="flex justify-center">
            <Link
              href={href}
              className="flex flex-col items-center gap-1.5 text-text"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-primary">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <motion.button
        type="button"
        aria-label="دکمه مرکزی"
        whileTap={{ scale: 0.88 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
        className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/50 shadow-[0_6px_14px_rgba(0,0,0,0.18),inset_0_1px_1px_0_rgba(255,255,255,0.7),inset_0_-2px_3px_0_rgba(0,0,0,0.12)]"
      >
        <BagIcon className="h-6 w-6 text-primary" />
      </motion.button>
    </nav>
  );
}
