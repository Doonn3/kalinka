export function useSSRFetch() {
  const page = ref(1);
  const filter = ref("");

  const { data, error, refresh } = useFetch("/api/get.developersPerPage", {
    query: { page, filter },
  });

  const reFetch = (_filter: string) => {
    filter.value = _filter;
    refresh();
  };

  return {
    page,
    filter,
    data,
    error,
    reFetch,
  };
}
