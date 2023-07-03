import useSWR, { Fetcher } from "swr";

export default function useApi(url: string, fetcher: Fetcher) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    isLoading,
    error,
  };
}