// recommendSong.ts
// Given either an album or an artist, and a list of song resources (tracks), to exclude
// return the most popular song on the album, or most popular song by the artist, that is not in the list of excluded songs.
// If all songs in the album/artist are in the list of excluded songs, throw an error.

// Use the popularity field to determine the most popular song.
// If there are two songs of equal popularity, return the first one.

import ky from "ky";
import getItem from "./P2-getItem.ts";
import getTracks from "./P4-getTracks.ts";
import { baseUrl, authOptions } from "../constants.ts";
import { Resource } from "../types.ts";

export default async function recommendSong(
  seed: Resource,
  excluded: Resource[]
): Promise<Resource> {
  // Delete this line and add your code here!
  throw new Error("Not implemented");
}
