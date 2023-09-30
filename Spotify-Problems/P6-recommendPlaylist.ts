// recommendPlaylist.ts
// Given a array of resources, and a settings object, return a playlist of 10 songs that match the settings
// using the recommendations endpoint.
// The playlist should be an array of Resource objects of type "track"

import ky from "ky";
import { baseUrl, authOptions } from "../constants.ts";
import { Resource, Settings } from "../types.ts";

export default async function recommendPlaylist(
  seedResources: Resource[],
  settings: Settings
): Promise<Resource[]> {
  // Your code here!

  return [];
}
