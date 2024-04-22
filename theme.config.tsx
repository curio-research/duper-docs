import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span className="logo">Duper</span>,
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === "/" ? "Duper" : "%s — Duper",
    };
  },
  project: {
    link: "https://github.com/curio-research/duper-docs",
  },
  head: (
    <>
      <meta property="title" content="Duper Docs" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  docsRepositoryBase: "https://github.com/curio-research/duper-docs/tree/main/",
  footer: {
    text: "© 2024 Duper",
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
