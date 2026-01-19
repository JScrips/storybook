import { QueryClient } from '@tanstack/react-query';

class QueryClientSingleton {
  private static instance: QueryClient | null = null;

  private constructor() {}

  public static getInstance(): QueryClient {
    if (!QueryClientSingleton.instance) {
      QueryClientSingleton.instance = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
          },
        },
      });
    }
    return QueryClientSingleton.instance;
  }

  public static resetInstance(): void {
    QueryClientSingleton.instance = null;
  }
}

export { QueryClientSingleton };
