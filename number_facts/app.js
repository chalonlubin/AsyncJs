"use strict";

const BASE_URL = "http://numbersapi.com/"

// async function to make a call to API with favorite number requesting the fact in JSON format.
async function getFact(favNum) {
  const resp = await axios.get(
    `${BASE_URL}${favNum}?json`,
  )
  debugger
  return resp.data.text
}