/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query LandingSlides {\n    landingSlides {\n      id\n      title\n      text\n    }\n  }\n": types.LandingSlidesDocument,
};

export function graphql(source: "\n  query LandingSlides {\n    landingSlides {\n      id\n      title\n      text\n    }\n  }\n"): (typeof documents)["\n  query LandingSlides {\n    landingSlides {\n      id\n      title\n      text\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;