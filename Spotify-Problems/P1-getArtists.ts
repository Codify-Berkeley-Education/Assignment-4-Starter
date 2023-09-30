// getArtists.js
// Most of the time, a user will think about an artist in terms of their name, not their ID.
// As a result, we need to be able to convert an artist name to an artist ID.
// Create a function called getArtistId that takes an artist name as an argument and returns the artist ID.
// If the artist's exact name doesn't exist, return null.

import ky from "ky";
import dotenv from "dotenv";
import { authOptions, baseUrl } from "../constants.ts";
dotenv.config({ path: "../.env" });
// Necessary because we are not in the same directory

// Get the access token from the .env file
const access_token = process.env.ACCESS_TOKEN;

export default async function getArtistId(
  artistName: string
): Promise<string | null> {
  // Get the access token from the .env file

  // What endpoint are we accessing?
  const endpoint = "/" + ""; // Todo edit me

  //what are we actually searching?
  const query = "q="; // Todo edit me

  // either artist, album, playlist, or track
  const resource_type = "type=" + ""; // Todo edit me

  // '?' indicates we are passing in query parameters
  const request_uri = baseUrl + endpoint + "?" + query + "&" + resource_type; // Todo optionally add any other useful query params

  // Get the response
  const response: any = await ky
    .get(encodeURI(request_uri), authOptions)
    .json();

  // From the response, if the artist name matches exactly, return the artist ID
  if (response.artists.items[0].name === artistName) {
    return ""; // Todo edit me
  }

  // Otherwise, return null
  return null;
}
