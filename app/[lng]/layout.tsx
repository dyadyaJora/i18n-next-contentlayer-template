import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { dir } from 'i18next'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    lng: string
  }
}


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}: RootLayoutProps) {
  if (!languages.includes(lng)) {
    return;
  }
// eslint-disable-next-line
  const { t } = await useTranslation(lng, 'menu')
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <LanguageSwitcher selectedLocale={lng}/>
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href={`/${lng}/`}>{t('home')}</Link>
                  <Link href={`/${lng}/about`}>{t('about')}</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
