import { SimpleQueryBuilder } from "../SimpleQueryBuilder/SimpleQueryBuilder";
import { DeveloperType } from "../types/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id } = query;

  const queryBuild = new SimpleQueryBuilder()
    .developers()
    .byID(Number(id)).Query;

  const result = await $fetch<DeveloperType>(queryBuild);

  return result;
});
