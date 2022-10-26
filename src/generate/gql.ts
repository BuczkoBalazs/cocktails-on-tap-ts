/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    mutation AddCocktail($input: AddCocktailInput!) {\n        addCocktail(input: $input) {\n            id\n            name\n            howTo\n            ingredients\n            image\n            favorite\n        }\n    }\n": types.AddCocktailDocument,
    "\n    query Cocktails {\n        cocktails {\n        id\n        name\n        howTo\n        ingredients\n        image\n        favorite\n        }\n    }\n": types.CocktailsDocument,
    "\n  query LandingSlides {\n    landingSlides {\n      id\n      title\n      text\n    }\n  }\n": types.LandingSlidesDocument,
    "\n    mutation DeleteCocktail($deleteCocktailId: ID!) {\n        deleteCocktail(id: $deleteCocktailId)\n    }\n": types.DeleteCocktailDocument,
    "\n    mutation UpdateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {\n        updateCocktail(id: $updateCocktailId, input: $input) {\n        id\n        name\n        howTo\n        ingredients\n        image\n        favorite\n        }\n    }\n": types.UpdateCocktailDocument,
};

export function graphql(source: "\n    mutation AddCocktail($input: AddCocktailInput!) {\n        addCocktail(input: $input) {\n            id\n            name\n            howTo\n            ingredients\n            image\n            favorite\n        }\n    }\n"): (typeof documents)["\n    mutation AddCocktail($input: AddCocktailInput!) {\n        addCocktail(input: $input) {\n            id\n            name\n            howTo\n            ingredients\n            image\n            favorite\n        }\n    }\n"];
export function graphql(source: "\n    query Cocktails {\n        cocktails {\n        id\n        name\n        howTo\n        ingredients\n        image\n        favorite\n        }\n    }\n"): (typeof documents)["\n    query Cocktails {\n        cocktails {\n        id\n        name\n        howTo\n        ingredients\n        image\n        favorite\n        }\n    }\n"];
export function graphql(source: "\n  query LandingSlides {\n    landingSlides {\n      id\n      title\n      text\n    }\n  }\n"): (typeof documents)["\n  query LandingSlides {\n    landingSlides {\n      id\n      title\n      text\n    }\n  }\n"];
export function graphql(source: "\n    mutation DeleteCocktail($deleteCocktailId: ID!) {\n        deleteCocktail(id: $deleteCocktailId)\n    }\n"): (typeof documents)["\n    mutation DeleteCocktail($deleteCocktailId: ID!) {\n        deleteCocktail(id: $deleteCocktailId)\n    }\n"];
export function graphql(source: "\n    mutation UpdateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {\n        updateCocktail(id: $updateCocktailId, input: $input) {\n        id\n        name\n        howTo\n        ingredients\n        image\n        favorite\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {\n        updateCocktail(id: $updateCocktailId, input: $input) {\n        id\n        name\n        howTo\n        ingredients\n        image\n        favorite\n        }\n    }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;