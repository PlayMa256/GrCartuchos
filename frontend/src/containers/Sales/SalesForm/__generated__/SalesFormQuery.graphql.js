/**
 * @flow
 * @relayHash 61fd710a5fc9138ee80e2b4004b1feac
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SalesFormQueryVariables = {||};
export type SalesFormQueryResponse = {|
  +clients: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +cnpj: ?string,
    +ie: ?string,
  |}>,
  +products: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
  |}>,
|};
export type SalesFormQuery = {|
  variables: SalesFormQueryVariables,
  response: SalesFormQueryResponse,
|};
*/

/*
query SalesFormQuery {
  clients {
    id
    name
    cnpj
    ie
  }
  products {
    id
    name
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v2 = [
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
          {
            kind: "ScalarField",
            alias: null,
            name: "cnpj",
            args: null,
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "ie",
            args: null,
            storageKey: null
          }
        ]
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "products",
        storageKey: null,
        args: null,
        concreteType: "Product",
        plural: true,
        selections: [v0, v1]
      }
    ];
  return {
    kind: "Request",
    operationKind: "query",
    name: "SalesFormQuery",
    id: null,
    text:
      "query SalesFormQuery {\n  clients {\n    id\n    name\n    cnpj\n    ie\n  }\n  products {\n    id\n    name\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "SalesFormQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: v2
    },
    operation: {
      kind: "Operation",
      name: "SalesFormQuery",
      argumentDefinitions: [],
      selections: v2
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'fc0bc27504d8cf9e0b26c40db782aa0d';
module.exports = node;
