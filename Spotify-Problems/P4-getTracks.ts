// getTracks.ts
// Given an album name, return all of that album's tracks as an array or Resource objects.

import ky from "ky";
import getItem from "./P2-getItem.ts";
import { baseUrl, authOptions } from "../constants.ts";
import { Resource } from "../types.ts";

export default async function getTracks(
  albumName: string
): Promise<Resource[]> {
  // Your code here!

  return [];
}
