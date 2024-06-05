import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useApiGet(key: any, fn: any, options: any) {
  return useQuery({ queryKey: key, queryFn: fn, ...options });
}

export function useApiSend(
  fn: any,
  success: any,
  error: any,
  invalidateKey: any,
  options: any,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fn,
    onSuccess: (data) => {
      invalidateKey &&
        invalidateKey.forEach((key: any) => {
          queryClient.invalidateQueries(key);
        });
      success && success(data);
    },
    onError: error,
    retry: 2,
    ...options,
  });
}
