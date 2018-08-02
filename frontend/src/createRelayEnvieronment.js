/**
 * @flow
 */
import { Environment, Network, RecordSource, Store } from "relay-runtime";

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
const devUrl = "http://localhost:3000/graphql";

function fetchQuery(operation, variables) {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const env = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default env;
