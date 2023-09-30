// getItem.js
// Using the ideas from the getArtistId function, create a function called getItemID that takes in a
// resource type (artist, album, or track) and a resource name and returns the resource ID or null.

import ky from "ky";
import { authOptions, baseUrl } from "../constants.ts";
import { ResourceType, Resource } from "../types.ts";

export default async function getItem(
  resourceName: string,
  resourceType: ResourceType
): Promise<Resource | null> {
  // Todo add your code here!
  // Use the code from problem 1 as a starting point

  return null;
}
