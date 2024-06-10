import { useState } from "nuxt/app";

export default defineEventHandler(async () => {
  const assets = useState("assets:server");
  const db = await assets.getItem("db.json");
  return {
    db,
  };
});
