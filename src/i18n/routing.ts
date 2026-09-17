import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fa"],
  defaultLocale: "fa",
  localeDetection: false,
});

export const localeConfig = {
  fa: { label: "فارسی", direction: "rtl" },
} as const;
