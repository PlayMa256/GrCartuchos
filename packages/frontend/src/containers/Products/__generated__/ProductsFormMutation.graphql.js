/**
 * @flow
 * @relayHash 4d7f317c599d914ca61b838de0cb5d52
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductInput = {
  name: string,
  date?: ?string,
};
export type ProductsFormMutationVariables = {|
  input: ProductInput
|};
export type ProductsFormMutationResponse = {|
  +createProduct: ?{|
    +id: string,
    +name: string,
  |}
|};
export type ProductsFormMutation = {|
  variables: ProductsFormMutationVariables,
  response: ProductsFormMutationResponse,
|};
*/

/*
mutation ProductsFormMutation(
  $input: ProductInput!
) {
  createProduct(input: $input) {
    id
    name
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "ProductInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "createProduct",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
            type: "ProductInput!"
          }
        ],
        concreteType: "Product",
        plural: false,
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
          }
        ]
      }
    ];
  return {
    kind: "Request",
    operationKind: "mutation",
    name: "ProductsFormMutation",
    id: null,
    text:
      "mutation ProductsFormMutation(\n  $input: ProductInput!\n) {\n  createProduct(input: $input) {\n    id\n    name\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "ProductsFormMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v1
    },
    operation: {
      kind: "Operation",
      name: "ProductsFormMutation",
      argumentDefinitions: v0,
      selections: v1
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'c7b79909dcf13535dba6ddbc885fab7f';
module.exports = node;
