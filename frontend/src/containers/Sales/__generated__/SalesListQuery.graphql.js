/**
 * @flow
 * @relayHash 98ed62c1fbd14340f8702b5c1e56c252
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SalesListQueryVariables = {||};
export type SalesListQueryResponse = {|
  +sales: ?$ReadOnlyArray<?{|
    +id: string,
    +client: {|
      +id: string,
      +name: string,
    |},
    +items: $ReadOnlyArray<?{|
      +quantity: ?number,
      +price: ?string,
      +product: ?{|
        +id: string,
        +name: string,
      |},
    |}>,
    +createdAt: ?string,
  |}>
|};
export type SalesListQuery = {|
  variables: SalesListQueryVariables,
  response: SalesListQueryResponse,
|};
*/

/*
query SalesListQuery {
  sales {
    id
    client {
      id
      name
    }
    items {
      quantity
      price
      product {
        id
        name
      }
    }
    createdAt
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
    v1 = [
      v0,
      {
        kind: "ScalarField",
        alias: null,
        name: "name",
        args: null,
        storageKey: null
      }
    ],
    v2 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "sales",
        storageKey: null,
        args: null,
        concreteType: "Sale",
        plural: true,
        selections: [
          v0,
          {
            kind: "LinkedField",
            alias: null,
            name: "client",
            storageKey: null,
            args: null,
            concreteType: "Client",
            plural: false,
            selections: v1
          },
          {
            kind: "LinkedField",
            alias: null,
            name: "items",
            storageKey: null,
            args: null,
            concreteType: "SaleProductType",
            plural: true,
            selections: [
              {
                kind: "ScalarField",
                alias: null,
                name: "quantity",
                args: null,
                storageKey: null
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "price",
                args: null,
                storageKey: null
              },
              {
                kind: "LinkedField",
                alias: null,
                name: "product",
                storageKey: null,
                args: null,
                concreteType: "Product",
                plural: false,
                selections: v1
              }
            ]
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "createdAt",
            args: null,
            storageKey: null
          }
        ]
      }
    ];
  return {
    kind: "Request",
    operationKind: "query",
    name: "SalesListQuery",
    id: null,
    text:
      "query SalesListQuery {\n  sales {\n    id\n    client {\n      id\n      name\n    }\n    items {\n      quantity\n      price\n      product {\n        id\n        name\n      }\n    }\n    createdAt\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "SalesListQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: v2
    },
    operation: {
      kind: "Operation",
      name: "SalesListQuery",
      argumentDefinitions: [],
      selections: v2
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = '7f2edcb97ce076dc0d6d4ed66ce69292';
module.exports = node;
