import { BASE_URL } from "../constants/constant";
import { DeveloperType } from "../types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { page, limit, filter } = query;

  let queryBuild = BASE_URL + `?_page=${page}&_limit=${limit}`;

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
          result.pages = Math.ceil(Number(total) / Number(limit));
        }
      }
    },
  });

  result.data = data;
  return result;
});
