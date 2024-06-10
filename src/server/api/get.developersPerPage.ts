import { BASE_URL, MAX_ITEMS_PER_PAGE } from "../constants/constant";
import { DeveloperType } from "../types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { page, filter } = query;

  let queryBuild = BASE_URL + `?_page=${page}&_limit=${MAX_ITEMS_PER_PAGE}`;

  if (filter) {
    queryBuild += `&type_like=${filter}`;
  }

  const result: { data: DeveloperType[]; pages: number } = {
    data: [],
    pages: 0,
  };
  const data = await $fetch<DeveloperType[]>(queryBuild, {
    async onResponse({ request, response, options }) {
      if (response) {
        const total = response.headers.get("X-Total-Count");
        if (total) {
          result.pages = Math.ceil(Number(total) / Number(MAX_ITEMS_PER_PAGE));
        }
      }
    },
  });

  result.data = data;
  return result;
});
