import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeConfig, routing } from "@/i18n/routing";
import { RegisterSW } from "@/app/register-sw";
import "@/styles/global.css";

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
    themeColor: "#ffffff",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t("title"),
    },
  };
}

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
    <html lang={locale} dir={direction}>
      <body className="min-h-full flex flex-col">
        <RegisterSW />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
