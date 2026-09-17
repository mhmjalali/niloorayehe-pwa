"use client";

import { motion } from "motion/react";
import {
  AcademyFillIcon,
  AcademyIcon,
  BagIcon,
  HomeFillIcon,
  HomeIcon,
  StoreFillIcon,
  StoreIcon,
  UserFillIcon,
  UserIcon,
} from "@/assets/icons";
import { Link, usePathname } from "@/i18n/navigation";

const NAV_ITEMS = [
  { href: "/", label: "خانه", Icon: HomeIcon, FillIcon: HomeFillIcon },
  {
    href: "/store",
    label: "دسته‌بندی",
    Icon: StoreIcon,
    FillIcon: StoreFillIcon,
  },
  {
    href: "/academy",
    label: "آکادمی",
    Icon: AcademyIcon,
    FillIcon: AcademyFillIcon,
  },
  {
    href: "/profile",
    label: "پروفایل",
    Icon: UserIcon,
    FillIcon: UserFillIcon,
  },
] as const;

const CENTER_HOLE_MASK =
  "radial-gradient(circle 36px at 50% 0, transparent 0 36px, black 37px)";

const ICON_SPRING = { type: "spring", stiffness: 500, damping: 30 } as const;

export function BottomNav() {
  const pathname = usePathname();
  const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
  // grid-cols-5: items sit in columns 0,1,3,4 (column 2 is the empty center slot).
  // The bar is dir="rtl", so the first grid column renders visually rightmost —
  // flip the column index before turning it into a left-edge percentage.
  const activeColumn = activeIndex === -1 ? -1 : activeIndex < 2 ? activeIndex : activeIndex + 1;
  const visualColumn = 4 - activeColumn;
  const indicatorLeft = ((visualColumn + 0.5) / 5) * 100;

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

      <motion.span
        aria-hidden="true"
        className="-translate-x-1/2 absolute top-0 h-0.5 w-8 rounded-full bg-primary"
        animate={{
          left: `${indicatorLeft}%`,
          opacity: activeColumn === -1 ? 0 : 1,
        }}
        transition={ICON_SPRING}
      />

      <ul className="relative grid h-full grid-cols-5 items-center">
        {NAV_ITEMS.slice(0, 2).map(({ href, label, Icon, FillIcon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex justify-center">
              <Link
                href={href}
                className="flex flex-col items-center gap-1.5 text-text"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <motion.span
                    className="absolute inset-0"
                    animate={{
                      opacity: isActive ? 0 : 1,
                      scale: isActive ? 0.75 : 1,
                    }}
                    transition={ICON_SPRING}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </motion.span>
                  <motion.span
                    className="absolute inset-0"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.75,
                    }}
                    transition={ICON_SPRING}
                  >
                    <FillIcon className="h-5 w-5 text-primary" />
                  </motion.span>
                </span>
                <span className="text-xs font-medium text-primary">
                  {label}
                </span>
              </Link>
            </li>
          );
        })}

        <li aria-hidden="true" />

        {NAV_ITEMS.slice(2).map(({ href, label, Icon, FillIcon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex justify-center">
              <Link
                href={href}
                className="flex flex-col items-center gap-1.5 text-text"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <motion.span
                    className="absolute inset-0"
                    animate={{
                      opacity: isActive ? 0 : 1,
                      scale: isActive ? 0.75 : 1,
                    }}
                    transition={ICON_SPRING}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </motion.span>
                  <motion.span
                    className="absolute inset-0"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.75,
                    }}
                    transition={ICON_SPRING}
                  >
                    <FillIcon className="h-5 w-5 text-primary" />
                  </motion.span>
                </span>
                <span className="text-xs font-medium text-primary">
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
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
