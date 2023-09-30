// getAlbums.ts
// Given an artist name, return all of that artist's albums as an array or Resource objects.
import ky from "ky";
import getItem from "./P2-getItem.ts";
import { baseUrl, authOptions } from "../constants.ts";
import { Resource } from "../types.ts";

export default async function getAlbums(
  artistName: string
): Promise<Resource[]> {
  // Your code here!

  return [];
}
