"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, SearchIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { GithubIcon } from "./Icons";
import { Navigation } from "./Navigation";
import { useSidebar } from "./Providers";

export default function WedgesHeader() {
  const { toggleSidebar, toggleSearch } = useSidebar();
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <>
      <div className="[&_a]:duration-180 sticky top-0 z-50 border-b border-white/20 bg-primary dark:bg-transparent [&_a]:transition-colors">
        <div className="container flex min-h-[72px] gap-6 md:grid md:min-h-[88px] md:grid-cols-[1fr_auto_1fr]">
          <Link
            className={cn(
              "hidden self-center justify-self-start md:block",
              focusClasses,
              "outline-white"
            )}
            href={siteConfig.wedgesURL}
          >
            <h1 className="font-sans text-2xl font-medium text-white md:block">{t("header.wedges", "Wedges")}</h1>
          </Link>

          <Navigation
            aria-label={t("header.wedgesNav", "Wedges Nav")}
            className="-ml-3 justify-self-start md:flex md:justify-self-center"
          >
            <Navigation.Item href={siteConfig.wedgesURL}>{t("header.react", "React")}</Navigation.Item>
            <Navigation.Item href={siteConfig.wedgesURL + "/figma"}>{t("header.figma", "Figma")}</Navigation.Item>

            <Navigation.Item asChild active={!pathname.includes("/components")}> 
              <Link href="/">{t("header.docs", "Docs")}</Link>
            </Navigation.Item>

            <Navigation.Item
              asChild
              active={pathname.includes("/components")}
              className="hidden md:inline-flex"
            >
              <Link href="/components">{t("header.components", "Components")}</Link>
            </Navigation.Item>
          </Navigation>

          <Navigation aria-label={t("header.socialLinks", "Social Links")} className="hidden justify-self-end md:flex">
            <Navigation.Item
              className="px-0 md:px-0"
              href={siteConfig.github}
              rel="noreferrer"
              target="_blank"
            >
              {t("header.github", "GitHub")}
            </Navigation.Item>
          </Navigation>

          <Navigation
            aria-label={t("header.mobileMenu", "Mobile Menu")}
            className="ml-auto self-center justify-self-end md:hidden"
          >
            {/* Search */}
            <Button
              isIconOnly
              aria-label={t("header.openSearch", "Open search")}
              className="duration-180 group h-10 w-10 items-center justify-center transition-colors hover:text-white"
              data-theme="dark"
              variant="transparent"
              onClick={toggleSearch}
            >
              <SearchIcon className="duration-180 text-white transition-colors group-hover:opacity-100" />
            </Button>

            {/* Github */}
            <Button
              asChild
              isIconOnly
              aria-label={t("header.githubLink", "GitHub link")}
              className="duration-180 group h-10 w-10 items-center justify-center transition-colors hover:text-white"
              data-theme="dark"
              variant="transparent"
            >
              <a href={siteConfig.github} rel="noreferrer" target="_blank">
                <GithubIcon className="duration-180 text-white transition-colors group-hover:opacity-100" />
              </a>
            </Button>

            {/* Mobile menu */}
            <Button
              isIconOnly
              aria-label={t("header.openMenu", "Open menu")}
              className="duration-180 group h-10 w-10 items-center justify-center transition-colors hover:text-white"
              data-theme="dark"
              variant="transparent"
              onClick={toggleSidebar}
            >
              <MenuIcon className="duration-180 text-white transition-colors group-hover:opacity-100" />
            </Button>
          </Navigation>
        </div>
      </div>
    </>
  );
}
