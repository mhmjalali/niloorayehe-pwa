import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { localeConfig, routing } from "@/i18n/routing";
import { RegisterSW } from "@/app/register-sw";
import { BottomNav } from "@/components/main/bottom-nav";
import { Header } from "@/components/main/header";
import "@/styles/global.css";

const iranYekan = localFont({
  src: [
    {
      path: "../fonts/iranyekan/IRANYekanLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/iranyekan/IRANYekanRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/iranyekan/IRANYekanMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/iranyekan/IRANYekanBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/iranyekan/IRANYekanExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LayoutProps<"/[locale]">["params"];
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t("title"),
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const { direction } = localeConfig[locale as keyof typeof localeConfig];

  return (
    <html lang={locale} dir={direction} className={iranYekan.variable}>
      <body className="min-h-full flex flex-col bg-background">
        <RegisterSW />
        <NextIntlClientProvider>
          <Header />
          <div>{children}</div>
          <BottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
