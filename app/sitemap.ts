import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prajwallshetty.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}

