import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f5f7fa" },
          100: { value: "#edf2f7" },
          500: { value: "#4FD1C5" },
          600: { value: "#38B2AC" },
        },
      },
      spacing: {
        sm: { value: "0.5rem" },
        md: { value: "1rem" },
        lg: { value: "1.5rem" },
      },
      sizes: {
        sidebar: { value: "240px" },
      },
    },
    semanticTokens: {
      colors: {
        background: { value: "gray.50" },
        text: { value: "gray.800" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
