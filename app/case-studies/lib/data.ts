import { client } from "@/sanity-client/client";

export async function getCaseStudies() {
  return await client.fetch<Project[]>(
    `*[_type == "project"] | order(_createdAt asc) { 
          _id, 
          "mainImageUrl": mainImage.asset->url, 
          "subImageUrl": subImage.asset->url, 
          "logoUrl": logo.asset->url, 
          title, 
          subtitle, 
          description, 
          link,
        }`
  );
}

export async function getCaseStudy(id: string) {
  const [data] = await client.fetch<Project[]>(
    `*[_id == "${id}"] {
       study->,
       name,
       link,
       startDate, 
       endDate
    }`
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return data;
}
