/**
 * @flow
 * @relayHash fb48044047f9c40c2944eadff664837c
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ClientListQueryVariables = {||};
export type ClientListQueryResponse = {|
  +clients: ?$ReadOnlyArray<?{|
    +id: string,
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
    id
    name
    cnpj
    ie
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
    {
      kind: "LinkedField",
      alias: null,
      name: "clients",
      storageKey: null,
      args: null,
      concreteType: "Client",
      plural: true,
      selections: [
        {
          kind: "ScalarField",
          alias: null,
          name: "id",
          args: null,
          storageKey: null
        },
        {
          kind: "ScalarField",
          alias: null,
          name: "name",
          args: null,
          storageKey: null
        },
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
    }
  ];
  return {
    kind: "Request",
    operationKind: "query",
    name: "ClientListQuery",
    id: null,
    text:
      "query ClientListQuery {\n  clients {\n    id\n    name\n    cnpj\n    ie\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "ClientListQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: v0
    },
    operation: {
      kind: "Operation",
      name: "ClientListQuery",
      argumentDefinitions: [],
      selections: v0
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'cb38bcd5e661a4130f62bd8f2cdb6f66';
module.exports = node;
