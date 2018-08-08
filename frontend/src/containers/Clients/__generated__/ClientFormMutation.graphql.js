/**
 * @flow
 * @relayHash 0cc0c9c5d5675bb21081174aaae4cecc
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ClientFormMutationVariables = {|
  name: string,
  cnpj?: ?string,
  ie?: ?string,
|};
export type ClientFormMutationResponse = {|
  +createClient: ?{|
    +id: string
  |}
|};
export type ClientFormMutation = {|
  variables: ClientFormMutationVariables,
  response: ClientFormMutationResponse,
|};
*/

/*
mutation ClientFormMutation(
  $name: String!
  $cnpj: String
  $ie: String
) {
  createClient(name: $name, cnpj: $cnpj, ie: $ie) {
    id
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "name",
        type: "String!",
        defaultValue: null
      },
      {
        kind: "LocalArgument",
        name: "cnpj",
        type: "String",
        defaultValue: null
      },
      {
        kind: "LocalArgument",
        name: "ie",
        type: "String",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "createClient",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "cnpj",
            variableName: "cnpj",
            type: "String"
          },
          {
            kind: "Variable",
            name: "ie",
            variableName: "ie",
            type: "String"
          },
          {
            kind: "Variable",
            name: "name",
            variableName: "name",
            type: "String!"
          }
        ],
        concreteType: "Client",
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "id",
            args: null,
            storageKey: null
          }
        ]
      }
    ];
  return {
    kind: "Request",
    operationKind: "mutation",
    name: "ClientFormMutation",
    id: null,
    text:
      "mutation ClientFormMutation(\n  $name: String!\n  $cnpj: String\n  $ie: String\n) {\n  createClient(name: $name, cnpj: $cnpj, ie: $ie) {\n    id\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "ClientFormMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v1
    },
    operation: {
      kind: "Operation",
      name: "ClientFormMutation",
      argumentDefinitions: v0,
      selections: v1
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = '101bd0729a7c86629f3401dce4f819c4';
module.exports = node;
