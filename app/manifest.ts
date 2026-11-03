import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webleos — Web Design & Digital Growth Agency",
    short_name: "Webleos",
    description:
      "Webleos designs and develops bespoke 3D websites, high-converting landing pages, and digital growth systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#ff5e14",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

