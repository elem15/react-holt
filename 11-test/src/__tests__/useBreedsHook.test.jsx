import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import useBreeds from "../hooks/useBreeds";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

test("give empty list with no animal", () => {
  const { result } = renderHook(() => useBreeds(""), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
  const [breeds, status] = result.current;
  expect(breeds).toHaveLength(0);
  expect(status).toBe("loading");
});
