import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import duperLogo from "Duper.png";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img alt="logo" style={{ width: "2em" }} src={"/Duper.png"} />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Duper</span>
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === "/" ? "Quick Start — Duper Docs" : "%s — Duper Docs",
    };
  },
  project: {
    link: "https://github.com/curio-research/duper-docs",
  },
  head: (
    <>
      <meta property="title" content="Duper Docs" />
      <link rel="icon" href="/favicon.ico" />
      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`,
        }}
      />
      ;
    </>
  ),
  docsRepositoryBase: "https://github.com/curio-research/duper-docs/tree/main/",
  footer: {
    text: "© 2024-2025 Duper",
  },
  darkMode: true,
  primaryHue: {
    dark: 190,
    light: 190,
  },
  // primarySaturation: {
  //   dark: 100,
  //   light: 80,
  // },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
};

export default config;
