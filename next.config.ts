import type { NextConfig } from "next";
import { SITE_URL } from "./lib/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mankrruuti.com" }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
