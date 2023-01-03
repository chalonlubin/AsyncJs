"use strict";

const BASE_URL = "http://numbersapi.com/";

/**
 * Make a call to Numbers API with favorite number requesting the fact in JSON
 */
async function getFact(favNum) {
  const resp = await axios.get(
    `${BASE_URL}${favNum}?json`,
  );

  return resp.data
  // populateFacts([resp.data.text]);
}


/**
 * Make a call to Numbers API to get facts for multiple numbers in JSON
 */
async function getMultipleFacts(...nums) {
  const resp = await axios.get(
    `${BASE_URL}${nums.join(',')}?json`,
  );

  populateFacts(Object.values(resp.data));
}


/**
 * Populate num-facts div with facts
 * facts: array of fact strings
 */
function populateFacts(facts) {
  const $numFacts = $('#num-facts');
  $numFacts.empty();

  for (let fact of facts) {
    $numFacts.append($(`<div>${fact}</div>`));
  }
}


/**
 * Make calls to Numbers API to get 4 facts on a favorite number
 */
async function getFourFacts(num) {
  let factPromises = [];

  for (let i = 0; i < 4; i++) {
    factPromises.push(getFact(num));
  }

  let results = await Promise.all(factPromises);
  results = results.map(factJson => factJson.text);

  populateFacts(results);
}