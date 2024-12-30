import { Enabled,QueryFunction,QueryKey, useQuery } from "@tanstack/react-query";

export const userQueryData = (
  querykey: QueryKey,
  queryFn: QueryFunction,
  enabled?: Enabled
) => {
  const { data, isPending, isFetched, refetch, isFetching } = useQuery({ queryKey: querykey, queryFn, enabled });

  return { data, isPending, isFetched, refetch, isFetching };
}