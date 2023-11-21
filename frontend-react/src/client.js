import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "779g650v",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skStnyXawwEWNtjFjZDuEjffpYjvTTqgCh3rBKmkpepXtVAlUwpQ6ayi3OqvZm0cTo5EZJeOyBEvjxDLY2yWXPDsuvLGBzBbFgq2bOwNdvMlUIF4urpcUt2Kp83cyoZltVcE1dJN1ZemglulWjhDaatkUzx0XUgeeTmGWpbWW9EyZ4hwRDfm",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
