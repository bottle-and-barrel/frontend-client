import { QueryClientConfig } from "@tanstack/react-query";

export const clientConfig = {
  defaultOptions: {
    queries: {
      throwOnError(error, query) {
        // TODO: Improve error handling: Add different behaviour for various errors like validation, internet connection, etc.
        // For now, it's true to follow NextJS redirects from axios auth interceptor
        return true;
      },
    },
  },
} satisfies QueryClientConfig;
