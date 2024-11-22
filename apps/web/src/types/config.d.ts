import type { About } from "@/types/about";
import type { Resume } from "@/types/resume";
import type { NavItem } from "@/types/nav-bar";
import { OpenGraph } from "./open-graph";
import type { GiscusProps } from "@giscus/react";

/**
 * Type definition for the Web app configuration.
 * 
 * @param {About} about
 * @param {Resume} resume
 */

export type Config = {
  avatar: string;
  title: string;
  description: string;
  author: string;
  keywords: string[];
  status: string;
  openGraph: OpenGraph
  navItems: NavItem[];
  about: About;
  resume: Resume;
  giscusConfig: GiscusProps;
}
