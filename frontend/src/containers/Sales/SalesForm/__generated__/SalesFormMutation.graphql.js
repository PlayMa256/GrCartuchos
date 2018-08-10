/**
 * @flow
 * @relayHash 5b69884e650c412345fe5d2e7da682df
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SaleInput = {
  client: string,
  items: $ReadOnlyArray<?SaleProductInput>,
  date?: ?string,
  status?: ?string,
  paymentDate?: ?string,
};
export type SaleProductInput = {
  product: ProductInput,
  quantity: number,
  price: string,
};
export type ProductInput = {
  name: string,
  date?: ?string,
};
export type SalesFormMutationVariables = {|
  input: SaleInput
|};
export type SalesFormMutationResponse = {|
  +createSale: ?{|
    +id: string
  |}
|};
export type SalesFormMutation = {|
  variables: SalesFormMutationVariables,
  response: SalesFormMutationResponse,
|};
*/

/*
mutation SalesFormMutation(
  $input: SaleInput!
) {
  createSale(input: $input) {
    id
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "SaleInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "createSale",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
            type: "SaleInput"
          }
        ],
        concreteType: "Sale",
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
    name: "SalesFormMutation",
    id: null,
    text:
      "mutation SalesFormMutation(\n  $input: SaleInput!\n) {\n  createSale(input: $input) {\n    id\n  }\n}\n",
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "SalesFormMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v1
    },
    operation: {
      kind: "Operation",
      name: "SalesFormMutation",
      argumentDefinitions: v0,
      selections: v1
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'dfbbec298c799ccff43e308d5b93fe7d';
module.exports = node;
