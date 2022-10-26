/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCocktailInput = {
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
};

export type AddLandingSlideInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddReviewInput = {
  postedAbout: Scalars['ID'];
  postedBy: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Cocktail = {
  __typename?: 'Cocktail';
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
  reviews?: Maybe<Array<Review>>;
  users?: Maybe<Array<User>>;
};


export type CocktailUsersArgs = {
  filter?: InputMaybe<UsersFilterInput>;
};

export type CocktailsFilterInput = {
  name: Scalars['String'];
};

export type LandingSlide = {
  __typename?: 'LandingSlide';
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCocktail: Cocktail;
  addLandingSlide: LandingSlide;
  addReview: Review;
  addUser: User;
  deleteCocktail: Scalars['Boolean'];
  deleteLandingSlide: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  updateCocktail: Cocktail;
  updateLandingSlide: LandingSlide;
  updateReview: Review;
  updateUser: User;
};


export type MutationAddCocktailArgs = {
  input: AddCocktailInput;
};


export type MutationAddLandingSlideArgs = {
  input: AddLandingSlideInput;
};


export type MutationAddReviewArgs = {
  input: AddReviewInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationDeleteCocktailArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLandingSlideArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCocktailArgs = {
  id: Scalars['ID'];
  input: UpdateCocktailInput;
};


export type MutationUpdateLandingSlideArgs = {
  id: Scalars['ID'];
  input: UpdateLandingSlideInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  input: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  cocktail?: Maybe<Cocktail>;
  cocktails?: Maybe<Array<Cocktail>>;
  landingSlide?: Maybe<LandingSlide>;
  landingSlides?: Maybe<Array<LandingSlide>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryCocktailArgs = {
  id: Scalars['ID'];
};


export type QueryCocktailsArgs = {
  filter?: InputMaybe<CocktailsFilterInput>;
};


export type QueryLandingSlideArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilterInput>;
};

export type Review = {
  __typename?: 'Review';
  cocktail?: Maybe<Cocktail>;
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  user?: Maybe<User>;
};

export type UpdateCocktailInput = {
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateLandingSlideInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateReviewInput = {
  postedAbout: Scalars['ID'];
  postedBy: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  cocktails?: Maybe<Array<Cocktail>>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  reviews?: Maybe<Array<Review>>;
};


export type UserCocktailsArgs = {
  filter?: InputMaybe<CocktailsFilterInput>;
};

export type UsersFilterInput = {
  age: Scalars['Int'];
};

export type LandingSlidesQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingSlidesQuery = { __typename?: 'Query', landingSlides?: Array<{ __typename?: 'LandingSlide', id: number, title: string, text: string }> | null };


export const LandingSlidesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LandingSlides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landingSlides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<LandingSlidesQuery, LandingSlidesQueryVariables>;

/**
 * __useLandingSlidesQuery__
 *
 * To run a query within a React component, call `useLandingSlidesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingSlidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingSlidesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLandingSlidesQuery(baseOptions?: Apollo.QueryHookOptions<LandingSlidesQuery, LandingSlidesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LandingSlidesQuery, LandingSlidesQueryVariables>(LandingSlidesDocument, options);
      }
export function useLandingSlidesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LandingSlidesQuery, LandingSlidesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LandingSlidesQuery, LandingSlidesQueryVariables>(LandingSlidesDocument, options);
        }
export type LandingSlidesQueryHookResult = ReturnType<typeof useLandingSlidesQuery>;
export type LandingSlidesLazyQueryHookResult = ReturnType<typeof useLandingSlidesLazyQuery>;
export type LandingSlidesQueryResult = Apollo.QueryResult<LandingSlidesQuery, LandingSlidesQueryVariables>;