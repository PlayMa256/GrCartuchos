/**
 * @flow
 * @relayHash 7f38a43a569033120d9635021c014d7c
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductListQueryVariables = {||};
export type ProductListQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +name: string,
    +date: ?string,
  |}>
|};
export type ProductListQuery = {|
  variables: ProductListQueryVariables,
  response: ProductListQueryResponse,
|};
*/

/*
query ProductListQuery {
  products {
    name
    date
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
      name: "date",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    operationKind: "query",
    name: "ProductListQuery",
    id: null,
    text:
      "query ProductListQuery {\n  products {\n    name\n    date\n    id\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "ProductListQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: [
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
      ]
    },
    operation: {
      kind: "Operation",
      name: "ProductListQuery",
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "products",
          storageKey: null,
          args: null,
          concreteType: "Product",
          plural: true,
          selections: [
            v0,
            v1,
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
(node/*: any*/).hash = '060ce6b00cb7c052c407b4b642c4a05e';
module.exports = node;
