import { BASE_URL } from "../constants/constant";
import { DeveloperType } from "../types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id } = query;

  let queryBuild = BASE_URL + `/${id}`;

  const result = await $fetch<DeveloperType>(queryBuild);

  return result;
});
