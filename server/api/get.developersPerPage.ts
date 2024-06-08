import { SimpleQueryBuilder } from "../SimpleQueryBuilder/SimpleQueryBuilder";
import { DeveloperType } from "../types/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { page, limit, filter } = query;

  const queryBuild = new SimpleQueryBuilder()
    .developers()
    .pagination(Number(page), Number(limit))
    .getTypes(String(filter)).Query;

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
