import type { MetadataRoute } from "next";
import { studio } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: studio.name,
    short_name: studio.shortName,
    start_url: "/",
    display: "browser",
    background_color: "#F7F6F2",
    theme_color: "#103D4C",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
