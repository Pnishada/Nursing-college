import { QueryClient, QueryFunction, QueryKey } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

export const queryClient = new QueryClient();

export const defaultQueryFn =
  <T>({ on401 }: { on401?: () => void } = {}): QueryFunction<T> =>
  async ({ queryKey }: { queryKey: QueryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });
    if (res.status === 401 && on401) {
      on401();
    }
    return throwIfResNotOk(res);
  };
