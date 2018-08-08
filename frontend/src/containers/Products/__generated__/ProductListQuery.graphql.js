/**
 * @flow
 * @relayHash 6c115c91f503bcc68009dab4f3723c72
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductListQueryVariables = {||};
export type ProductListQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +name: string
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
  };
  return {
    kind: "Request",
    operationKind: "query",
    name: "ProductListQuery",
    id: null,
    text: "query ProductListQuery {\n  products {\n    name\n    id\n  }\n}\n",
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
          selections: [v0]
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
(node/*: any*/).hash = 'e1dbc0606014cccab8129261134ac9fa';
module.exports = node;
