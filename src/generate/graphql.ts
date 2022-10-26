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

export type AddCocktailMutationVariables = Exact<{
  input: AddCocktailInput;
}>;


export type AddCocktailMutation = { __typename?: 'Mutation', addCocktail: { __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean } };

export type CocktailsQueryVariables = Exact<{ [key: string]: never; }>;


export type CocktailsQuery = { __typename?: 'Query', cocktails?: Array<{ __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean }> | null };

export type LandingSlidesQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingSlidesQuery = { __typename?: 'Query', landingSlides?: Array<{ __typename?: 'LandingSlide', id: number, title: string, text: string }> | null };

export type DeleteCocktailMutationVariables = Exact<{
  deleteCocktailId: Scalars['ID'];
}>;


export type DeleteCocktailMutation = { __typename?: 'Mutation', deleteCocktail: boolean };

export type UpdateCocktailMutationVariables = Exact<{
  updateCocktailId: Scalars['ID'];
  input: UpdateCocktailInput;
}>;


export type UpdateCocktailMutation = { __typename?: 'Mutation', updateCocktail: { __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean } };


export const AddCocktailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCocktail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCocktailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCocktail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"howTo"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"favorite"}}]}}]}}]} as unknown as DocumentNode<AddCocktailMutation, AddCocktailMutationVariables>;
export const CocktailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cocktails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cocktails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"howTo"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"favorite"}}]}}]}}]} as unknown as DocumentNode<CocktailsQuery, CocktailsQueryVariables>;
export const LandingSlidesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LandingSlides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landingSlides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<LandingSlidesQuery, LandingSlidesQueryVariables>;
export const DeleteCocktailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCocktail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteCocktailId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCocktail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteCocktailId"}}}]}]}}]} as unknown as DocumentNode<DeleteCocktailMutation, DeleteCocktailMutationVariables>;
export const UpdateCocktailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCocktail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCocktailId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCocktailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCocktail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCocktailId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"howTo"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"favorite"}}]}}]}}]} as unknown as DocumentNode<UpdateCocktailMutation, UpdateCocktailMutationVariables>;
export type AddCocktailMutationFn = Apollo.MutationFunction<AddCocktailMutation, AddCocktailMutationVariables>;

/**
 * __useAddCocktailMutation__
 *
 * To run a mutation, you first call `useAddCocktailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCocktailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCocktailMutation, { data, loading, error }] = useAddCocktailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCocktailMutation(baseOptions?: Apollo.MutationHookOptions<AddCocktailMutation, AddCocktailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCocktailMutation, AddCocktailMutationVariables>(AddCocktailDocument, options);
      }
export type AddCocktailMutationHookResult = ReturnType<typeof useAddCocktailMutation>;
export type AddCocktailMutationResult = Apollo.MutationResult<AddCocktailMutation>;
export type AddCocktailMutationOptions = Apollo.BaseMutationOptions<AddCocktailMutation, AddCocktailMutationVariables>;

/**
 * __useCocktailsQuery__
 *
 * To run a query within a React component, call `useCocktailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCocktailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCocktailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCocktailsQuery(baseOptions?: Apollo.QueryHookOptions<CocktailsQuery, CocktailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CocktailsQuery, CocktailsQueryVariables>(CocktailsDocument, options);
      }
export function useCocktailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CocktailsQuery, CocktailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CocktailsQuery, CocktailsQueryVariables>(CocktailsDocument, options);
        }
export type CocktailsQueryHookResult = ReturnType<typeof useCocktailsQuery>;
export type CocktailsLazyQueryHookResult = ReturnType<typeof useCocktailsLazyQuery>;
export type CocktailsQueryResult = Apollo.QueryResult<CocktailsQuery, CocktailsQueryVariables>;

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
export type DeleteCocktailMutationFn = Apollo.MutationFunction<DeleteCocktailMutation, DeleteCocktailMutationVariables>;

/**
 * __useDeleteCocktailMutation__
 *
 * To run a mutation, you first call `useDeleteCocktailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCocktailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCocktailMutation, { data, loading, error }] = useDeleteCocktailMutation({
 *   variables: {
 *      deleteCocktailId: // value for 'deleteCocktailId'
 *   },
 * });
 */
export function useDeleteCocktailMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCocktailMutation, DeleteCocktailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCocktailMutation, DeleteCocktailMutationVariables>(DeleteCocktailDocument, options);
      }
export type DeleteCocktailMutationHookResult = ReturnType<typeof useDeleteCocktailMutation>;
export type DeleteCocktailMutationResult = Apollo.MutationResult<DeleteCocktailMutation>;
export type DeleteCocktailMutationOptions = Apollo.BaseMutationOptions<DeleteCocktailMutation, DeleteCocktailMutationVariables>;
export type UpdateCocktailMutationFn = Apollo.MutationFunction<UpdateCocktailMutation, UpdateCocktailMutationVariables>;

/**
 * __useUpdateCocktailMutation__
 *
 * To run a mutation, you first call `useUpdateCocktailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCocktailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCocktailMutation, { data, loading, error }] = useUpdateCocktailMutation({
 *   variables: {
 *      updateCocktailId: // value for 'updateCocktailId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCocktailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCocktailMutation, UpdateCocktailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCocktailMutation, UpdateCocktailMutationVariables>(UpdateCocktailDocument, options);
      }
export type UpdateCocktailMutationHookResult = ReturnType<typeof useUpdateCocktailMutation>;
export type UpdateCocktailMutationResult = Apollo.MutationResult<UpdateCocktailMutation>;
export type UpdateCocktailMutationOptions = Apollo.BaseMutationOptions<UpdateCocktailMutation, UpdateCocktailMutationVariables>;