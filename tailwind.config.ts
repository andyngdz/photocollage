import { heroui } from "@heroui/react";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      "hover-border-blue":
        "cursor-pointer border-2 border-default hover:border-blue-500 transition-[border-color]",
    },
  },
  plugins: [
    heroui(),
    typography(),
    function ({ addUtilities, theme }: PluginAPI) {
      addUtilities({
        ".hover-border-blue": {
          cursor: "pointer",
          border: "2px solid",
          borderColor: theme("colors.default", "gray"),
          transition: "border-color 0.2s ease-in-out",
        },
        ".hover-border-blue:hover": {
          borderColor: theme("colors.blue.500"),
        },
      });
    },
  ],
} satisfies Config;
