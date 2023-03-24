import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
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

function getBreeds(animal) {
  let list;
  function TestComponent() {
    list = useBreeds(animal);
    return null;
  }

  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
    </QueryClientProvider>
  );
  return list;
}

test("give empty list with no animal", () => {
  const [breeds, status] = getBreeds("");
  expect(breeds).toHaveLength(0);
  expect(status).toBe("loading");
});
