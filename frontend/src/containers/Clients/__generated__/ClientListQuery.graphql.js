/**
 * @flow
 * @relayHash b498853bf0f59af3c97416a142d49de6
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ClientListQueryVariables = {||};
export type ClientListQueryResponse = {|
  +clients: ?$ReadOnlyArray<?{|
    +name: string,
    +cnpj: ?string,
    +ie: ?string,
  |}>
|};
export type ClientListQuery = {|
  variables: ClientListQueryVariables,
  response: ClientListQueryResponse,
|};
*/

/*
query ClientListQuery {
  clients {
    name
    cnpj
    ie
    id
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "cnpj",
      args: null,
      storageKey: null
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "ie",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    operationKind: "query",
    name: "ClientListQuery",
    id: null,
    text:
      "query ClientListQuery {\n  clients {\n    name\n    cnpj\n    ie\n    id\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "ClientListQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "clients",
          storageKey: null,
          args: null,
          concreteType: "Client",
          plural: true,
          selections: [v0, v1, v2]
        }
      ]
    },
    operation: {
      kind: "Operation",
      name: "ClientListQuery",
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "clients",
          storageKey: null,
          args: null,
          concreteType: "Client",
          plural: true,
          selections: [
            v0,
            v1,
            v2,
            {
              kind: "ScalarField",
              alias: null,
              name: "id",
              args: null,
              storageKey: null
            }
          ]
        }
      ]
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'c4f08a3107ef5758663163156dfa03ea';
module.exports = node;
