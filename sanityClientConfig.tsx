import { createClient } from "next-sanity";

const client = createClient({
  projectId: 'o6g7h80h',
  dataset: 'production',
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

export default client;