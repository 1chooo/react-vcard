/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://nextjs.org/docs/app/api-reference/next-config-js
 */

/**
 * @type {import('next').NextConfig}
 */

import { rehypeGithubAlerts } from 'rehype-github-alerts'
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const nextConfig = {
  images: {
    domains: ['skillicons.dev', 'blog.1chooo.com'], // Use domains instead of remotePatterns
    dangerouslyAllowSVG: true, // Enable SVG support for remote SVG images
    unoptimized: true, // Disable image optimization to avoid issues with remote images
  },
  // https://nextjs.org/docs/architecture/nextjs-compiler
  compiler: {
    styledComponents: true,
  },
  // https://nextjs.org/docs/pages/building-your-application/configuring/mdx
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  sassOptions: {
    implementation: 'sass-embedded',
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeGithubAlerts],

})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
